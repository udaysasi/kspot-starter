import { sdk } from '../sdk.js';
import { DateTime } from 'luxon';

/**
 * Returns the cumulative number of people in the waiting area over the lookback window.
 * Sums male.count + female.count across all timestamps returned by distributionQuery2.
 *
 * Env:
 *  - WAITING_AREA_LOCATION_ID (required): Kloudspot site/location id
 *  - WAITING_AREA_LOOKBACK_MIN (optional): minutes to look back (default 15)
 *  - WAITING_AREA_ATTRIBUTES (optional): CSV of attribute keys to include (default "male,female")
 */
export async function getWaitingRoomCount(): Promise<number> {
	const locationId = process.env.WAITING_AREA_LOCATION_ID;
	if (!locationId) return 0;

	const now: DateTime = DateTime.now();
	const lookback = Number(process.env.WAITING_AREA_LOOKBACK_MIN || 15);
	const attrKeys = String(process.env.WAITING_AREA_ATTRIBUTES || 'male,female')
		.split(',')
		.map(s => s.trim())
		.filter(Boolean);

	try {
		// Call the analytics endpoint for a short rolling window
		const res: any[] = await sdk.api.cameraAnalyticsQueries.distributionQuery2({
			requestBody: {
				distributionTiming: 'HOURLY', // 'SECONDS' | 'MINUTES' | 'HOURLY' | 'DAILY'
				start: now.minus({ minutes: lookback }).toMillis(),
				finish: now.toMillis(),
				locations: [locationId],
				attributes: attrKeys,          // only request the attributes we care about
			},
		});

		// Example item:
		// { timestamp, countAndDwell: [ { attributes: { female: { count, ... }, male: { count, ... } } } ] }
		let total = 0;
		const buckets = Array.isArray(res) ? res : [];

		for (const bucket of buckets) {
			const series = Array.isArray(bucket?.countAndDwell) ? bucket.countAndDwell : [];
			for (const entry of series) {
				const attrs = entry?.attributes && typeof entry.attributes === 'object' ? entry.attributes : null;
				if (!attrs) continue;

				for (const key of attrKeys) {
					// be flexible about key casing
					const k = key.toLowerCase();
					const candidate =
						attrs[key] ??
						attrs[k] ??
						attrs[k.charAt(0).toUpperCase() + k.slice(1)];

					const n = Number(candidate?.count ?? 0);
					if (Number.isFinite(n)) total += n;
				}
			}
		}
		return total;
	} catch {
		// On any error, return 0 so the KPI doesn't break the page
		return 0;
	}
}
