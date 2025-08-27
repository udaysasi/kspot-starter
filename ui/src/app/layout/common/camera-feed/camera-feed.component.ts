import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { API_BASE_HREF } from 'app/services/base-url.service';
import { generateMotionJPEGurl } from 'app/utils/mapping';

@Component({
    selector: 'app-camera-feed',
    standalone: true,
    imports: [
        CommonModule,
        MatFormFieldModule,
        MatIconModule,
        MatSelectModule,
        ReactiveFormsModule,
    ],
    templateUrl: './camera-feed.component.html',
})
export class CameraFeedComponent implements OnInit, OnDestroy {
    public dialogData: {
        isLive: boolean;
        cameraLists: Array<any>;
        meta: {
            name: string;
        };
    } = inject(MAT_DIALOG_DATA);
    private _dialogRef = inject(MatDialogRef<CameraFeedComponent>);
    private api_base = inject(API_BASE_HREF);

    private _unsubscribeAll: Subject<any> = new Subject<any>();

    cameraTagMap: any = new Map();
    sourceUrlControl = new FormControl();
    mediaSource: string;
    feedOptions: {
        key: string;
        value: any;
    }[] = [];
    cameras!: any[];

    ngOnDestroy(): void {}

    ngOnInit(): void {
        this.sourceUrlControl.valueChanges
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe({
                next: (value) => {
                    if (this.dialogData.isLive) {
                        this.startLiveFeed(value);
                    } else {
                        this.startFeed();
                    }
                },
            });
        if (this.dialogData.isLive) {
            this.feedOptions =
                this.dialogData.cameraLists?.map((cam) => {
                    return {
                        key: cam.name,
                        value: cam,
                    };
                }) || [];
            if (this.feedOptions.length) {
                this.sourceUrlControl.patchValue(this.feedOptions[0].value);
            }
        } else {
            this.feedOptions =
                this.dialogData.cameraLists.map((cam) => {
                    return {
                        key: cam.cameraId,
                        value: cam,
                    };
                }) || [];
            if (this.feedOptions.length) {
                this.sourceUrlControl.patchValue(this.feedOptions[0].value);
            }
        }
    }

    async startLiveFeed(camera: any) {
        const { user, secret, websocketUrl } = camera;
        if (user && secret && websocketUrl) {
            generateMotionJPEGurl(user, secret, websocketUrl).then(
                (imgUrl: string) => {
                    this.mediaSource = imgUrl;
                    var imgUrl = imgUrl.replace(/ /g, '');
                }
            );
        }
    }

    startFeed() {
        const value = this.sourceUrlControl.value;
        const isVideo = value.path.split('.')[1] === 'mp4' ? true : false;
        this.mediaSource =
            this.api_base +
            `ui-api/mediaCapture/${
                isVideo ? 'playVideo' : 'getImage'
            }?fileName=${value.path}`;
    }

    onCancel() {
        this._dialogRef.close(null);
    }
}
