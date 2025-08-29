import { Route } from '@angular/router';
import { initialDataResolver } from 'app/app.resolvers';
import { AuthGuard } from 'app/core/auth/guards/auth.guard';
import { NoAuthGuard } from 'app/core/auth/guards/noAuth.guard';
import { LayoutComponent } from 'app/layout/layout.component';
import { Error404Component } from './layout/common/error-404/error-404.component';
import { AppSettingsComponent } from './layout/common/app-settings/app-settings.component';
import { roleGuard } from './core/auth/guards/role.guard';
import { PatientDashboardComponent } from './modules/patient-dashboard/patient-dashboard.component';

// @formatter:off
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
export const appRoutes: Route[] = [
    // Redirect empty path to '/example'
    { path: '', pathMatch: 'full', redirectTo: 'sample' },

    // Redirect signed-in user to the '/example'
    //
    // After the user signs in, the sign-in page will redirect the user to the 'signed-in-redirect'
    // path. Below is another redirection for that path to redirect the user to the desired
    // location. This is a small convenience to keep all main routes together here on this file.
    { path: 'signed-in-redirect', pathMatch: 'full', redirectTo: 'sample' },

    // Auth routes for guests
    {
        path: '',
        canActivate: [NoAuthGuard],
        canActivateChild: [NoAuthGuard],
        component: LayoutComponent,
        data: {
            layout: 'empty',
        },
        children: [
			{
                path: 'sample',
                loadChildren: () =>
                    import('app/modules/site-demo/site-demo.routes'),
            },
			{ path: 'patient-dashboard', component: PatientDashboardComponent },
            {
                path: 'confirmation-required',
                loadChildren: () =>
                    import(
                        'app/modules/auth/confirmation-required/confirmation-required.routes'
                    ),
            },
            {
                path: 'forgot-password',
                loadChildren: () =>
                    import(
                        'app/modules/auth/forgot-password/forgot-password.routes'
                    ),
            },
            {
                path: 'reset-password',
                loadChildren: () =>
                    import(
                        'app/modules/auth/reset-password/reset-password.routes'
                    ),
            },
            {
                path: 'sign-in',
                loadChildren: () =>
                    import('app/modules/auth/sign-in/sign-in.routes'),
            },
            {
                path: 'sign-up',
                loadChildren: () =>
                    import('app/modules/auth/sign-up/sign-up.routes'),
            },

        ],
    },

    // Auth routes for authenticated users
    {
        path: '',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        component: LayoutComponent,
        data: {
            layout: 'empty',
        },
        children: [
            {
                path: 'sign-out',
                loadChildren: () =>
                    import('app/modules/auth/sign-out/sign-out.routes'),
            },
            {
                path: 'unlock-session',
                loadChildren: () =>
                    import(
                        'app/modules/auth/unlock-session/unlock-session.routes'
                    ),
            },
        ],
    },

    // Landing routes
    {
        path: '',
        component: LayoutComponent,
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        data: {
            layout: 'empty',
        },
        children: [
            {
                path: 'site-picker',
                loadChildren: () =>
                    import('app/modules/landing/site-picker/site-picker.routes'),
            },
            {
                path: 'sample',
                loadChildren: () =>
                    import('app/modules/site-demo/site-demo.routes'),
            },
            {
                path: "demo",
                loadChildren: () =>
                    import('app/modules/demo/demo.routes'),
            },
        ],
    },

    // Admin routes
    {
        path: 'home',
        // canActivate: [AuthGuard],
        // canActivateChild: [AuthGuard],
        data: {
            layout: 'modern',
        },
        component: LayoutComponent,
        resolve: {
            initialData: initialDataResolver,
        },
        children: [
            {
                path: ":siteId",
                loadChildren: () =>
                    import('app/modules/admin/dashboard/dashboard.routes'),
            },
            {
                path: ":siteId/settings",
                component: AppSettingsComponent,
                canActivate: [roleGuard],
                data: {
                    roles: ["ROLE_ADMIN"]
                }
            },

        ],
    },

    {
        path: "**",
        component: LayoutComponent,
        data: {
            layout: 'empty',
        },
        resolve: {
            initialData: initialDataResolver,
        },
        children: [
            {
                path: "",
                component: Error404Component
            },
        ],
    },
];
