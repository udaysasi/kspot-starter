import {
    AfterViewInit,
    Component,
    ElementRef,
    EventEmitter,
    inject,
    Input,
    OnChanges,
    Output,
    SimpleChanges,
    ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import Globe from 'globe.gl';
import * as THREE from 'three';
import { DataService, MessageIds } from 'app/services/data.service';
import { Subject, takeUntil } from 'rxjs';
import { percentageToVH, percentageToVW } from 'app/utils/threejs.utils';

@Component({
    selector: 'app-globe',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './globe.component.html',
})
export class GlobeComponent implements AfterViewInit, OnChanges {
    @ViewChild('globeViz') globeViz: ElementRef;
    @Input('sites') sites: {
        index: number;
        lat: any;
        lng: any;
        size: any;
        color: string;
        title: any;
        id: any;
    }[] = [];

    @Output('onGlobeMarkerClick') onGlobeMarkerClick = new EventEmitter();
    private _unsubscribeAll: Subject<any> = new Subject<any>();
    private _dataService = inject(DataService);
    myGlobe?: any;

    ngAfterViewInit(): void {
        this.loadModel();
        this.onDivResize();
        window.addEventListener('resize', this.updateGlobeSize.bind(this));
        this.animate();
        this.setupSubscription();
    }
    setupSubscription() {
        this._dataService.currentMessage$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((event) => {
                switch (event?.id) {
                    case MessageIds.GLOBE_FOCUS:
                        this.focusGlobe(event.data.lat, event.data.lng);
                        break;
                }
            });
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (this.sites?.length) {
            this.addSitesToGlobe();
        }
    }

    addSitesToGlobe() {
        const markerSvg = `<img src="assets/markers/marker-new.svg">`;
        this.myGlobe.htmlElementsData(this.sites).htmlElement((d: any) => {
            const container = document.createElement('div');

            const el = document.createElement('div');
            const titleEl = document.createElement('div');
            titleEl.style.display = 'none';
            titleEl.innerText = d.title;
            el.setAttribute('id', `map-${d.index}`);
            el.style.width = `${d.size + 30}px`;
            el.onmouseover = function (event) {
                var target = event.target;
                el.style.width = `${d.size + 40}px`;
                el.style.transition = '0.3s';
            };
            el.onmouseout = function (event) {
                var target = event.target;
                el.style.width = `${d.size + 30}px`;
                el.style.transition = '0.05s';
            };
            el.innerHTML = markerSvg;
            el.className = 'marker';
            el.style.color = d.color;
            el.style.transition = '0.05s';
            el.style['pointer-events'] = 'auto';
            el.style.cursor = 'pointer';
            el.title = d.title;

            container.addEventListener('mouseover', () => {
                titleEl.style.display = 'flex';
            });
            container.addEventListener('mouseout', () => {
                titleEl.style.display = 'none';
            });
            container.appendChild(titleEl);
            container.appendChild(el);
            container.style.placeItems = 'center';
            container.onclick = () => this.onGlobeMarkerClick.emit(d);
            return container;
        });
        this.focusGlobe(this.sites[0].lat, this.sites[0].lng);
    }

    onMarkerClick(d: any): any {
        this.onGlobeMarkerClick.emit(d);
    }

    animate = () => {
        requestAnimationFrame(this.animate);
        this.myGlobe.controls().update();
    };

    /**
     * @description Using this method as a mediator for screen resize as the function need not to have any param.
     */
    updateGlobeSize(): void {
        if (this.myGlobe && this.globeViz) {
            this.onDivResize();
        }
    }

    /**
     *
     * @param width Value to which the renderer should resize Width @default 100.
     * @param height Value to which the renderer should resize Height @default 100.
     * @description This function should be called when one changes the container Size not needed when full window size changes. and also update the tooltip size so it won't go out of bound
     */
    onDivResize(width: number = 100, height: number = 100) {
        width = percentageToVW(width);
        height = percentageToVH(height);
        if (this.myGlobe.camera() !== undefined) {
            this.myGlobe.camera().aspect = width / height;
            this.myGlobe.camera().updateProjectionMatrix();
            this.myGlobe.renderer().setSize(width, height);
        }
    }

    loadModel() {
        this.myGlobe = new Globe(this.globeViz.nativeElement, {
            animateIn: true,
            waitForGlobeReady: false,
        });
        this.myGlobe
            .globeImageUrl('assets/images/globe/earth-blue-marble.jpg')
            .bumpImageUrl('assets/images/globe/earth-topology.png')
            .backgroundImageUrl('assets/images/globe/night-sky.png')
            .atmosphereColor('#43baff')
            .atmosphereAltitude(0.28);
        this.myGlobe.renderer().setPixelRatio(window.devicePixelRatio);
        this.myGlobe.camera().zoom = 1.2;
        this.myGlobe.controls().autoRotate = true;
        this.myGlobe.controls().autoRotateSpeed = 0.35;
        this.addClouds();
    }

    addClouds() {
        const CLOUDS_IMG_URL = 'assets/images/globe/fair_clouds_4k.png';
        const CLOUDS_ALT = 0.004;

        new THREE.TextureLoader().load(CLOUDS_IMG_URL, (cloudsTexture) => {
            const clouds = new THREE.Mesh(
                new THREE.SphereGeometry(
                    this.myGlobe.getGlobeRadius() * (1 + CLOUDS_ALT),
                    75,
                    75
                ),
                new THREE.MeshPhongMaterial({
                    map: cloudsTexture,
                    transparent: true,
                })
            );
            this.myGlobe.scene().add(clouds);
        });
    }

    focusGlobe(lat: number, lng: number) {
        this.myGlobe.pointOfView({ lat: lat, lng: lng }, 1500);
    }
}
