import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { API_BASE_HREF } from './base-url.service';
import { ExternalAuthModel } from 'app/models/auth.model';

@Injectable({
    providedIn: 'root',
})
export class ExternalAuthService {
    private _http = inject(HttpClient);
    private api_base = inject(API_BASE_HREF);

    getExternalAuth() {
        return this._http.get<ExternalAuthModel>(
            `${this.api_base}public/external-authentication-methods`
        );
    }
}
