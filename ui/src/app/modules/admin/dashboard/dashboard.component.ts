import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UnityComponent } from 'app/layout/common/unity/unity.component';
import { API_BASE_HREF } from 'app/services/base-url.service';
import { DataService, MessageIds } from 'app/services/data.service';
import { LocationService } from 'app/services/location.service';
import { Subject, takeUntil } from 'rxjs';
import { MatButtonModule }        from '@angular/material/button';
import { MatSlideToggleModule }   from '@angular/material/slide-toggle';
import { MatRadioModule }         from '@angular/material/radio';
import { MatProgressBarModule }   from '@angular/material/progress-bar';
import { MatTabsModule }          from '@angular/material/tabs';
import { MatFormFieldModule }     from '@angular/material/form-field';
import { MatInputModule }         from '@angular/material/input';
import { MatSnackBarModule, MatSnackBar } from '@angular/material/snack-bar';
import {  MatCalendar }      from '@angular/material/datepicker';
import { CommonModule }           from '@angular/common';
import { NumberedPaginatorChange } from 'app/modules/shared/numbered-paginator/numbered-paginator.component';


@Component({
    selector: 'app-dashboard',
    standalone: true,
    imports: [UnityComponent, MatButtonModule,
    MatSlideToggleModule,
    MatRadioModule,
    MatProgressBarModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
     MatCalendar],
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],

})
export class DashboardComponent implements OnInit, OnDestroy {
    private activatedRoute = inject(ActivatedRoute);
    private API_BASE = inject(API_BASE_HREF);
    private router = inject(Router);
    private _dataService = inject(DataService);
    private _locationService = inject(LocationService);

    private _unsubscribeAll: Subject<void> = new Subject<void>();

    isLoading: boolean = false;
    isModelLoaded: boolean = false;
    buildPath: string;
    floors: Array<{
        id: string;
        key: string;
        val: number;
    }> = [];

    siteId!: string;
      constructor(private sb: MatSnackBar) {}
    ngOnDestroy(): void {
        this._unsubscribeAll.next(null);
        this._unsubscribeAll.complete();
    }

    ngOnInit(): void {
        this.activatedRoute.paramMap
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe({
                next: (res) => {
                    this.siteId = res.get('siteId');
                },
            });
        this.getSite(this.siteId);
    }

    getSite(siteId: string) {
        this._locationService
            .getSiteById(siteId)
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe({
                next: (site) => {
                    this.floors = site.children
                        .sort((b, a) => parseInt(a.name) - parseInt(b.name))
                        .map((floor, i) => {
                            return {
                                key: floor.name,
                                id: floor.id,
                                val: parseInt(floor.name),
                            };
                        });
                    if (site.meta && site.meta['webglmodelkey']) {
                        this.buildPath = `${this.API_BASE}ui-api/file/model-${site.meta['webglmodelkey']}`;
                        this.isLoading = true;
                    } else {
                        this._dataService.changeMessage({
                            id: MessageIds.SNACKBAR,
                            data: {
                                message: {
									name: 'No Site Present',
								}
                            },
                        });
                        this.onGlobeBtn();
                    }
                },
            });
    }

    onModelLoad(_event: boolean) {
        this.isModelLoaded = _event;
    }

    onGlobeBtn() {
        this.router.navigateByUrl('/site-picker');
    }

    openSnack(type: 'success' | 'warning' | 'error' | 'info'): void {
    this.sb.open(`${type} snackbar`, 'Dismiss', {
      panelClass: [`${type}-snackbar`],
      duration: 4000,
    });
  }


  // Replace this with your real dataset
    visits = Array.from({ length: 50 }, (_, i) => ({ id: i + 1, name: `Visit #${i + 1}` }));
    totalVisits = this.visits.length;
  
    pageSize = 10;
    currentPageIndex = 0;
    private prevIndex = 0;
  
    // for visual feedback
    lastOutputEvent: any = null;
  
    get pagedVisits() {
      const start = this.currentPageIndex * this.pageSize;
      return this.visits.slice(start, start + this.pageSize);
    }
  
    onPage(e: NumberedPaginatorChange) {
      const out = {
        previousPageIndex: this.prevIndex,
        pageIndex: e.pageIndex,
        pageSize: e.pageSize,
        length: e.length,
      };
  
      this.prevIndex = e.pageIndex;
      this.currentPageIndex = e.pageIndex;
      this.lastOutputEvent = out;
  
      console.log('Output event:', out);
    }

  
}
