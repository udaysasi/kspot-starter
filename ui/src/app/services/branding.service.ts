import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { API_BASE_HREF } from './base-url.service';

@Injectable({
    providedIn: 'root',
})
export class BrandingService {
    private api_base = inject(API_BASE_HREF);
    private _httpClient = inject(HttpClient);

    getBranding() {
        return this._httpClient.get<{ config: any }>(
            `${this.api_base}public/branding`
        );
    }
}
