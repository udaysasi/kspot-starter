import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { CameraFeedComponent } from '../camera-feed/camera-feed.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
    selector: 'app-alert-snackbar',
    standalone: true,
    imports: [CommonModule, MatButtonModule, MatIconModule],
    templateUrl: './alert-snackbar.component.html',
})
export class AlertSnackbarComponent {
    private _dialogData = inject(MAT_SNACK_BAR_DATA);
    private dialog = inject(MatDialog);
    message?: any;
    ngOnInit(): void {
        this.message = this._dialogData.message;
    }

    onView(mediaRef: Array<any>) {
        this.dialog
            .open(CameraFeedComponent, {
                data: {
                    data: {
                        name: 'Alert Feed',
                    },
                    isLive: false,
                    cameraLists: mediaRef,
                },
                width: '45%',
                height: '65%',
                panelClass: 'user-dialog-background',
                hasBackdrop: true,
            })
            .afterClosed()
            .subscribe(() => {});
    }
}
