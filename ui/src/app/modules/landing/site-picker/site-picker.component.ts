import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    inject,
    OnDestroy,
    OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobeComponent } from 'app/layout/common/globe/globe.component';
import { LocationService } from 'app/services/location.service';
import { Subject, takeUntil } from 'rxjs';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { DataService, MessageIds } from 'app/services/data.service';

@Component({
    selector: 'app-site-picker',
    standalone: true,
    imports: [
        CommonModule,
        GlobeComponent,
        MatButtonModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        ReactiveFormsModule,
        MatCardModule,
        MatListModule,
        MatDividerModule,
    ],
    templateUrl: './site-picker.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SitePickerComponent implements OnInit, OnDestroy {
    private _locationService = inject(LocationService);
    private _dataService = inject(DataService);

    private _unsubscribeAll: Subject<any> = new Subject<any>();
    private router = inject(Router);
    private cdr = inject(ChangeDetectorRef);
    matedSites: {
        index: number;
        lat: any;
        lng: any;
        size: any;
        color: string;
        title: any;
        id: any;
    }[] = [];
    sites;
    isSearch = true;

    ngOnDestroy(): void {
        this._unsubscribeAll.next(null);
        this._unsubscribeAll.complete();
    }

    ngOnInit(): void {
        this.getAllSites();
    }

    getAllSites() {
        this._locationService
            .getSites()
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe({
                next: (res) => {
                    this.sites = res;
                    const sites = res
                        .sort((a, b) => a.name.localeCompare(b.name))
                        .map((r, i) => {
                            return {
                                index: i,
                                lat: r.location?.lat,
                                lng: r.location?.lng,
                                size: 20 + r.children?.length,
                                color: 'red',
                                title: r?.name,
                                id: r?.id,
                            };
                        });
                    this.matedSites = sites;
                    this.cdr.detectChanges();
                },
            });
    }

    onSiteClick(item) {
        this.router.navigateByUrl(`/home/${item.id}`);
        localStorage.setItem('siteId' , item.id);
    }

    onMouseOver(item) {
        this._dataService.changeMessage({
            id: MessageIds.GLOBE_FOCUS,
            data: {
                lat: item?.location?.lat,
                lng: item?.location?.lng,
            },
        });
    }

    onGlobeMarkerClick(_event: any) {
        this.router.navigateByUrl(`/home/${_event.id}`);
    }

    onNotificationClick() {}

    onSearchClick() {
        this.isSearch = !this.isSearch;
    }
}
