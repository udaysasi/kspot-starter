import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { DataService, MessageIds } from './services/data.service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { AlertSnackbarComponent } from './layout/common/alert-snackbar/alert-snackbar.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: [RouterOutlet, MatSnackBarModule]
})
export class AppComponent
{
    private _dataService = inject(DataService);
    private _unsubscribeAll: Subject<any> = new Subject<any>();
    private _snackbar = inject(MatSnackBar);

    ngOnDestroy(): void {
        this._unsubscribeAll.next(null);
        this._unsubscribeAll.complete();
    }

    ngOnInit(): void {
        this._dataService.currentMessage$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((message) => {
                if (message) {
                    switch (message.id) {
                        case MessageIds.SNACKBAR:
                            this.openSnackbar(message.data);
                            break;
                    }
                }
            });
    }

    openSnackbar(data: any) {
        this._snackbar.openFromComponent(AlertSnackbarComponent, {
            data: data,
            duration: 5 * 1000,
            horizontalPosition: 'end',
            verticalPosition: 'bottom',
            panelClass: 'red-snackbar',
        });
    }
}
