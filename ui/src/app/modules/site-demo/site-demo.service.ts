import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { API_BASE_HREF } from '../../services/base-url.service';

export interface Floor {
    id: string;
    name: string;
    zonecount: number;
}

export interface Site {
    id: string;
    name: string;
    timeZoneId?: string;
    address?: string;
    floors?: Floor[];
}

export interface DemographicItem {
    key: string;
    count: number;
}

type ApiZone = { id: string; name: string };
type ApiFloor = { id: string; name: string; children?: ApiZone[] };
type ApiSite = {
    id: string;
    name: string;
    timezone?: string;
    address?: string;
    children?: ApiFloor[]; // floors live here
};

export type DistributionTiming = 'hourly' | 'daily' | 'weekly';

export interface DistributionRequest {
    distributionTiming: DistributionTiming;             // "hourly"
    start: number;                                      // ms
    finish: number;                                     // ms
    locations: string[];                                // [siteId]
    attributes: Array<'male' | 'female'>;               // ["male","female"]
}

export interface DistributionRawItem {
    timestamp: number;
    countAndDwell?: Array<{
        attributes: Partial<Record<
            'male' | 'female',
            { count: number; totalDwell: number; occurrence: number; locationId: string; locationType: string }
        >>;
    }>;
}

export interface HourlyDistributionRow {
    timestamp: number;  // ms
    male: number;       // 0 when missing
    female: number;     // 0 when missing
}

@Injectable({ providedIn: 'root' })
export class SiteDemoService {
    private api_base = inject(API_BASE_HREF);
    private _httpClient = inject(HttpClient);

    constructor(private http: HttpClient) { }

    getSites(): Observable<Site[]> {
        return this.http.get<ApiSite[]>('/api/v1/locations/sites').pipe(
            map(arr => Array.isArray(arr) ? arr : []),
            map(apiSites =>
                apiSites.map<Site>(s => ({
                    id: s.id,
                    name: s.name,
                    timezone: s.timezone,
                    address: s.address,
                    floors: (s.children ?? []).map<Floor>(f => ({
                        id: f.id,
                        name: f.name,
                        zonecount: (f.children ?? []).length
                    }))
                }))
            )
        );
    }


    getHourlyDistribution(siteId: string, startMs: number, finishMs: number): Observable<HourlyDistributionRow[]> {
        const payload: DistributionRequest = {
            distributionTiming: 'hourly',
            start: startMs,
            finish: finishMs,
            locations: [siteId],
            attributes: ['male', 'female']
        };

        return this.http
            .post<DistributionRawItem[]>('/api/v1/camera/analytics/distribution', payload)
            .pipe(
                map(arr => Array.isArray(arr) ? arr : []),
                map(items =>
                    items.map<HourlyDistributionRow>(it => {
                        const attrs = it.countAndDwell?.[0]?.attributes as any | undefined;
                        const male = attrs?.male?.count ?? 0;
                        const female = attrs?.female?.count ?? 0;
                        return { timestamp: it.timestamp, male, female };
                    })
                )
            );
    }
}
