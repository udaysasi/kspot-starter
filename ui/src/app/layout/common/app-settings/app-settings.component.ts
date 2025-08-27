import { Location, NgClass, NgFor, NgSwitch, NgSwitchCase } from '@angular/common';
import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDrawer, MatSidenavModule } from '@angular/material/sidenav';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ExampleSettingsComponent } from './example-settings/example-settings.component';

@Component({
    selector: 'app-settings',
    templateUrl: './app-settings.component.html',
    encapsulation: ViewEncapsulation.None,
    standalone: true,
    imports: [MatSidenavModule, MatButtonModule, MatIconModule, NgFor, NgClass, NgSwitch, NgSwitchCase, ExampleSettingsComponent],
})
export class AppSettingsComponent implements OnInit {
    @ViewChild('drawer') drawer: MatDrawer;
    drawerMode: 'over' | 'side' = 'side';
    drawerOpened: boolean = true;
    panels: any[] = [
        {
            id: 'example-settings',
            title: 'Example Settings',
            description: 'Please provide your description and remove this component when you are configuring settings',
            icon: 'heroicons_outline:scale',
        }
    ];
    selectedPanel: string = 'example-settings';

    constructor(private _location: Location, private _activatedRoute: ActivatedRoute, private _router: Router) { }
    
    ngOnInit(): void {
        this._fallBackToSitePicker();
        const siteId = localStorage.getItem("siteId");
        if(!siteId) {
            this._router.navigate(["/site-picker"]);
        }
    }

    goBack() {
        const siteId = localStorage.getItem("siteId");
        this._router.navigate([!siteId ? "/site-picker": `/home/${siteId}`])
    }


    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Navigate to the panel
     *
     * @param panel
     */
    goToPanel(panel: string): void {
        this.selectedPanel = panel;
        // Close the drawer on 'over' mode
        if (this.drawerMode === 'over') {
            this.drawer.close();
        }
    }

    /**
     * Get the details of the panel
     *
     * @param id
     */
    getPanelInfo(id: string): any {
        return this.panels.find(panel => panel.id === id);
    }

    /**
     * Track by function for ngFor loops
     *
     * @param index
     * @param item
     */
    trackByFn(index: number, item: any): any {
        return item.id || index;
    }

    private _fallBackToSitePicker() {
        this._activatedRoute.paramMap.subscribe({
            next: (q: ParamMap) => {
                if(!q.get("siteId")) {
                    this._router.navigate(["/site-picker"]);
                }
            }
        });
    }
}

