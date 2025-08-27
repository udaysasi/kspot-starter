import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from 'app/core/user/user.service';
import { of, switchMap } from 'rxjs';

export const roleGuard: CanActivateFn = (route, state) => {
    const roles = route.data?.roles as string[] ?? [];
    const userService = inject(UserService);
    const router = inject(Router);
    return userService.user$.pipe(
        switchMap((user: any) => {
            const authorities = new Set(user?.authorities ?? []);
            const hasAny = roles.some(role => authorities.has(role));
            console.log(hasAny ? true : router.createUrlTree(['/site-picker']));
            const decision = hasAny ? true : router.createUrlTree(['/site-picker']);
            return of(decision);
        })
    );
};