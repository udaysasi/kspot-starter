import {
    HttpClient,
    HttpErrorResponse,
    HttpHeaders,
} from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { UserService } from 'app/core/user/user.service';
import { API_BASE_HREF } from 'app/services/base-url.service';
import { catchError, Observable, of, switchMap, tap, throwError } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
    private _authenticated: boolean = false;
    private _httpClient = inject(HttpClient);
    private _userService = inject(UserService);
    private api_base = inject(API_BASE_HREF);
    private _inProgress: boolean = false;
    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    /**
     * Setter & getter for access token
     */
    set accessToken(token: string) {
        localStorage.setItem('accessToken', token);
    }

    get accessToken(): string {
        return localStorage.getItem('accessToken') ?? '';
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Forgot password
     *
     * @param email
     */
    forgotPassword(email: string): Observable<any> {
        return this._httpClient.post('api/auth/forgot-password', email);
    }

    /**
     * Reset password
     *
     * @param password
     */
    resetPassword(password: string): Observable<any> {
        return this._httpClient.post('api/auth/reset-password', password);
    }

    /**
     * Sign in
     *
     * @param credentials
     */
    signIn(credentials: {
        username: string;
        password: string;
        rememberme: boolean;
        otp: string;
    }): Observable<any> {
        // Throw error, if the user is already logged in
        if (this._authenticated) {
            return throwError(() => 'User is already logged in.');
        }
        return this._httpClient.get(this.api_base + 'ui-api/account').pipe(
            catchError((_) => this.authenticate(credentials)),
            switchMap((res) => {
                console.log('STARTER TWO', res, this._userService.user);
                if (res instanceof HttpErrorResponse) {
                    this._authenticated = false;
                } else {
                    this._userService.user = res;
                    this._authenticated = true;
                }
                return of(res);
            })
        );
    }
    private authenticate(credentials: {
        username: string;
        password: string;
        rememberme: boolean;
        otp: string;
    }) {
        if (this._inProgress) {
            return of(null);
        }

        this._inProgress = true;
        let headers = new HttpHeaders();
        headers = headers.set('Access-Control-Allow-Credentials', 'true');
        headers = headers.set('Access-Control-Allow-Origin', '*');
        headers = headers.set(
            'Content-Type',
            'application/x-www-form-urlencoded'
        );

        let body = new URLSearchParams();
        body.set('j_username', credentials.username);
        body.set('j_password', credentials.password);
        body.set('submit', 'Login');
        body.set('remember-me', credentials.rememberme ? 'true' : 'false');
        body.set('otp', credentials.otp);

        return this._httpClient
            .post(this.api_base + 'ui-api/authentication', body.toString(), {
                withCredentials: true,
                headers: headers,
            })
            .pipe(
                switchMap(() => {
                    console.log('STARTER 1');
                    this._inProgress = false;
                    return this.signIn(credentials).pipe(
                        tap((res) => {
                            this._authenticated = true;
                        })
                    );
                }),
                catchError((err) => {
                    console.log('STARTER 2');
                    this._inProgress = false;
                    this._authenticated = false;
                    return of(err);
                })
            );
    }
    /**
     * Sign in using the access token
     */
    signInUsingToken(): Observable<any> {
        // Sign in using the token
        return this._httpClient
            .post('api/auth/sign-in-with-token', {
                accessToken: this.accessToken,
            })
            .pipe(
                catchError(() =>
                    // Return false
                    of(false)
                ),
                switchMap((response: any) => {
                    // Replace the access token with the new one if it's available on
                    // the response object.
                    //
                    // This is an added optional step for better security. Once you sign
                    // in using the token, you should generate a new one on the server
                    // side and attach it to the response object. Then the following
                    // piece of code can replace the token with the refreshed one.
                    if (response.accessToken) {
                        this.accessToken = response.accessToken;
                    }

                    // Set the authenticated flag to true
                    this._authenticated = true;

                    // Store the user on the user service
                    this._userService.user = response.user;

                    // Return true
                    return of(true);
                })
            );
    }

    /**
     * Sign out
     */
    signOut(redirect?: boolean): Observable<any> {
        this._httpClient
            .post(
                this.api_base + 'ui-api/logout',
                {},
                { withCredentials: true }
            )
            .subscribe({
                next: () => {
                    localStorage.setItem('loginFlag', 'false');
                    sessionStorage.clear();
                },
                error: () => {
                    localStorage.setItem('loginFlag', 'false');
                    sessionStorage.clear();
                },
            });
        // Remove the access token from the local storage
        localStorage.removeItem('accessToken');

        // Set the authenticated flag to false
        this._authenticated = false;

        // Return the observable
        return of(true);
    }

    /**
     * Sign up
     *
     * @param user
     */
    signUp(user: {
        name: string;
        email: string;
        password: string;
        company: string;
    }): Observable<any> {
        return this._httpClient.post('api/auth/sign-up', user);
    }

    /**
     * Unlock session
     *
     * @param credentials
     */
    unlockSession(credentials: {
        email: string;
        password: string;
    }): Observable<any> {
        return this._httpClient.post('api/auth/unlock-session', credentials);
    }

    /**
     * Check the authentication status
     */
    check(): Observable<boolean> {
        return this._userService.get().pipe(
            catchError((_) => of({ error: true })),
            switchMap((d: any) => {
                if (d.error) {
                    return of(false);
                }
                this._authenticated = true;
                return of(true);
            })
        );
    }
}
