import {
    AfterViewInit,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ElementRef,
    EventEmitter,
    HostListener,
    inject,
    Input,
    OnDestroy,
    Output,
    ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subject, takeUntil } from 'rxjs';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { FileService } from 'app/services/file.service';
import { IndexedDbService } from 'app/services/indexed-db-service.service';
import { DataService, MessageIds } from 'app/services/data.service';

@Component({
    selector: 'app-unity',
    standalone: true,
    imports: [CommonModule, MatProgressBarModule],
    templateUrl: './unity.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UnityComponent implements AfterViewInit, OnDestroy {
    @ViewChild('webglContainer') webglContainer?: ElementRef;
    @Input('buildPath') buildPath?: string;
    @Output('onLoad') onLoad: EventEmitter<boolean> = new EventEmitter();
    @Output('onTooltipClick') onTooltipClick: EventEmitter<{
        id: string;
        data: any;
    }> = new EventEmitter();
    private dialog = inject(MatDialog);
    private _router = inject(Router);
    private _unsubscribeAll: Subject<any> = new Subject<any>();
    private _changeDetectorRef = inject(ChangeDetectorRef);

    private _fileService = inject(FileService);
    private _indexDbService = inject(IndexedDbService);
    private _dataService = inject(DataService);

    progressPer = 0;
    processing = false;
    myGameInstance = null;
    isLoading: boolean = true;
    landingPageUrl: string = '/';

    ngOnDestroy(): void {
        this._unsubscribeAll.next(null);
        this._unsubscribeAll.complete();
        this.myGameInstance?.Quit();
    }

    ngAfterViewInit(): void {
        this.loadModel();
    }

    @HostListener('window:DataFromUnity', ['$event'])
    onDatFromUnity(event: CustomEvent) {
        const e = JSON.parse(event.detail);
        console.log('Event From Unity', e);
        switch (e.id) {
            case 'zoneTooltipClicked':
                this.myGameInstance.SendMessage(
                    'DataHandler',
                    'OnCamera',
                    e.data.zoneName.split('_')[1]
                );
                break;
        }
    }

    async loadModel() {
        if (!this.buildPath) {
            return;
        }
        this.downloadFile();
    }

    downloadFile() {
        const zipUrl = this.buildPath;
        this._fileService
            .downloadAndExtractZip(zipUrl)
            .subscribe({
                next: (res) => {
                    if (res.phase === 'downloading') {
                        this.progressPer = parseInt(res.progress.toFixed(1));
                        console.log('progress', this.progressPer);
                        this._changeDetectorRef.markForCheck();
                    }
                    if (res.phase === 'completed') {
                        this.processModel(res.fileMap);
                    }
                },
            });
    }

    processModel(fileMap: Map<string, any>) {
        // const fileMap = res.fileMap;
        console.log('Filemap', fileMap);

        const dataUrl = fileMap.get('dt/Build/dt.data');
        const frameworkUrl = fileMap.get('dt/Build/dt.framework.js');
        const codeUrl = fileMap.get('dt/Build/dt.wasm');
        const loaderUrl = fileMap.get('dt/Build/dt.loader.js');
        this.isLoading = true;
        this.processing = true;
        this.progressPer;
        var config = {
            dataUrl: dataUrl,
            frameworkUrl: frameworkUrl,
            codeUrl: codeUrl,
            streamingAssetsUrl: `StreamingAssets`,
            companyName: `Kloudspot`,
            productName: `DT`,
            productVersion: `0.1.0`,
            devicePixelRatio: 4,
        };

        let container =
            document.querySelector('#unity-container') || new Element();
        var canvas: HTMLElement =
            document.querySelector('#unity-canvas') || new HTMLElement();

        if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
            var meta = document.createElement('meta');
            meta.name = 'viewport';
            document.getElementsByTagName('head')[0].appendChild(meta);
            canvas.style.width = '100%';
            canvas.style.height = '100%';
            container.className = 'unity-mobile';
            canvas.className = 'unity-mobile';
        } else {
            canvas.style.width = '100%';
            canvas.style.height = '100%';
        }
        var script = document.createElement('script');
        script.async = true;
        script.type = 'text/javascript';
        script.src = loaderUrl;
        script.onload = () => {
            createUnityInstance(canvas, config, (progress: number) => {
                this.progressPer = 100 * progress;
                this._changeDetectorRef.markForCheck();
            })
                .then((unityInstance: any) => {
                    unityInstance.matchWebGLToCanvasSize = true;
                    this.myGameInstance = unityInstance;
                    const isAnimation = localStorage.getItem('isAnimation');
                    if (!isAnimation) {
                        this.myGameInstance?.SendMessage(
                            'GameManager',
                            'StartAnimation'
                        );
                        localStorage.setItem('isAnimation', 'false');
                    }
                    this.setUpSubscription();
                    this.isLoading = false;
                    this._changeDetectorRef.markForCheck();
                    this.onLoad.emit(true);
                })
                .catch((message: any) => {
                    alert(message);
                });
        };
        this.webglContainer.nativeElement.appendChild(script);
    }

    setUpSubscription() {
        this._dataService.currentMessage$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe({
                next: (message) => {
                    console.log('message', message);
                    switch (message?.id) {
                        case MessageIds.ON_FLOOR_CHANGE:
                            if (message.data) {
                                this.myGameInstance?.SendMessage(
                                    'DataHandler',
                                    'ShowFloor',
                                    0
                                );
                            } else {
                                this.myGameInstance.SendMessage(
                                    'DataHandler',
                                    'ResetView'
                                );
                                this.myGameInstance.SendMessage(
                                    'DataHandler',
                                    'OnCamera',
                                    'MainCamera'
                                );
                            }
                            break;
                        case MessageIds.ON_HOME_BTN:
                            this.myGameInstance?.SendMessage(
                                'GameManager',
                                'ResetToFactoryView'
                            );
                            this.myGameInstance?.SendMessage(
                                'GameManager',
                                'ResetView'
                            );
                            break;
                        case MessageIds.ZONE_CAMERA_CLICKED:
                            this.myGameInstance?.SendMessage(
                                'DataHandler',
                                'OnCamera',
                                JSON.stringify(message.data)
                            );
                            break;
                        case MessageIds.ON_TOP_VIEW:
                            this.myGameInstance?.SendMessage(
                                'DataHandler',
                                'TopCameraOn'
                            );
                            break;
                    }
                },
            });
    }
}
