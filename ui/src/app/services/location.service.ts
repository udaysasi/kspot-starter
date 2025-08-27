import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { API_BASE_HREF } from './base-url.service';

@Injectable({
    providedIn: 'root',
})
export class LocationService {
    private api_base = inject(API_BASE_HREF);
    private _httpClient = inject(HttpClient);

    getSiteById(siteId: string) {
        return this._httpClient.get<any>(
            `${this.api_base}ui-api/locations/${siteId}`
        );
    }

    getSites() {
        return this._httpClient.get<Array<any>>(
            `${this.api_base}ui-api/locations/sites`
        );
    }
}
