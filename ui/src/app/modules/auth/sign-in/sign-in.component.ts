import { Location, NgIf } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import {
    Component,
    NgZone,
    OnInit,
    ViewChild,
    ViewEncapsulation,
} from '@angular/core';
import {
    FormsModule,
    NgForm,
    ReactiveFormsModule,
    UntypedFormBuilder,
    UntypedFormGroup,
    Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { fuseAnimations } from '@fuse/animations';
import { FuseAlertComponent, FuseAlertType } from '@fuse/components/alert';
import { AuthService } from 'app/core/auth/auth.service';
import { ExternalAuthModel } from 'app/models/auth.model';
import { ExternalAuthService } from 'app/services/external-auth.service';

@Component({
    selector: 'auth-sign-in',
    templateUrl: './sign-in.component.html',
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations,
    standalone: true,
    imports: [
        RouterLink,
        FuseAlertComponent,
        NgIf,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule,
        MatCheckboxModule,
        MatProgressSpinnerModule,
    ],
})
export class AuthSignInComponent implements OnInit {
    @ViewChild('signInNgForm') signInNgForm: NgForm;

    alert: { type: FuseAlertType; message: string } = {
        type: 'success',
        message: '',
    };
    signInForm: UntypedFormGroup;
    showAlert: boolean = false;
    externalAuths?: ExternalAuthModel;

    /**
     * Constructor
     */
    constructor(
        private _activatedRoute: ActivatedRoute,
        private _authService: AuthService,
        private _externalAuthService: ExternalAuthService,
        private _formBuilder: UntypedFormBuilder,
        private _router: Router,
        private ngZone: NgZone,
        private location: Location
    ) {}

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {
        this._externalAuthService.getExternalAuth().subscribe({
            next: (res) => {
                this.externalAuths = res;
            },
        });
        // Create the form
        this.signInForm = this._formBuilder.group({
            username: ['', [Validators.required]],
            password: ['', [Validators.required]],
            rememberme: [false],
            otp: [
                '',
                [
                    Validators.pattern('^[0-9]{1,6}$'),
                    Validators.minLength(6),
                    Validators.maxLength(6),
                ],
            ],
        });
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Sign in
     */
    signIn(): void {
        // Return if the form is invalid
        if (this.signInForm.invalid) {
            return;
        }

        // Disable the form
        this.signInForm.disable();

        // Hide the alert
        this.showAlert = false;

        // Sign in
        this._authService.signIn(this.signInForm.value).subscribe({
            next: (res) => {
                // Set the redirect url.
                // The '/signed-in-redirect' is a dummy url to catch the request and redirect the user
                // to the correct page after a successful sign in. This way, that url can be set via
                // routing file and we don't have to touch here.

                if (res instanceof HttpErrorResponse) {
                    this.handleError();
                } else {
                    const redirectURL =
                        this._activatedRoute.snapshot.queryParamMap.get(
                            'redirectURL'
                        ) || '/signed-in-redirect';
                    // Navigate to the redirect url
                    this._router.navigateByUrl(redirectURL);
                }
            },
            error: (response) => {
                // Re-enable the form
                this.handleError();
            },
        });
    }

    handleError() {
        this.signInForm.enable();

        // Reset the form
        this.signInNgForm.resetForm();

        // Set the alert
        this.alert = {
            type: 'error',
            message: 'Invalid username or password',
        };

        // Show the alert
        this.showAlert = true;
    }

    loginExternal(url: string) {
        this.ngZone.run(() => {
            this.location.replaceState('/');
            history.replaceState({}, 'Login', '/');
            window.location.href = url;
        });
    }
}
