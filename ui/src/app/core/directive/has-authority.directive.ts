import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { UserService } from 'app/core/user/user.service';
import { Subscription } from 'rxjs';

@Directive({
    selector: '[hasAuthority]',
    standalone: true
})
export class HasAuthorityDirective {
    private requiredRoles: string[] = [];
    private userSubscription: Subscription | undefined;

    constructor(
        private templateRef: TemplateRef<any>,
        private viewContainer: ViewContainerRef,
        private userService: UserService
    ) { }

    @Input()
    set hasAuthority(role: string | string[]) {
        this.requiredRoles = Array.isArray(role) ? role : [role];
        this.updateView();
    }

    private updateView() {
        this.userSubscription?.unsubscribe();
        this.userSubscription = this.userService.user$.subscribe((user: any) => {
            const authorities = new Set(user?.authorities ?? []);
            const hasAny = this.requiredRoles.some(role => authorities.has(role));
            this.viewContainer.clear();
            if (hasAny) {
                this.viewContainer.createEmbeddedView(this.templateRef);
            }
        });
    }

    ngOnDestroy() {
        this.userSubscription?.unsubscribe();
    }
}