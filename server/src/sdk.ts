import { KloudspotSDK } from 'kloudspot-analytics-sdk';

export const sdk = new KloudspotSDK({
  baseUrl: process.env.KLOUDSPOT_BASE_URL || 'https://walker.kloudspot.com/advanced',
  apiKeyId: process.env.KLOUD_API_KEY,
  apiSecret: process.env.KLOUD_API_SECRET,
  defaultHeaders: {
    Accept: 'application/json',
  },
});
