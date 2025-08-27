import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export enum MessageIds {
    GLOBE_FOCUS,
    ON_ZONE_CHANGE,
    ZONE_CAMERA_CLICKED,
    ON_ASSET_CHANGE,
    ALERTS,
    ON_HOME_BTN,
    ON_FLOOR_CHANGE,
    ON_TOP_VIEW,
    SNACKBAR,
    CUSTOM_SNACKBAR
}

@Injectable({
    providedIn: 'root',
})
export class DataService {
    private messageSource = new BehaviorSubject<{
        id: MessageIds;
        data: any;
    }>(null);
    private websocketMessageSource = new BehaviorSubject<{
        id: MessageIds;
        data: any;
        body: any;
    }>(null);
    websocketCurrentMessage$ = this.websocketMessageSource.asObservable();
    currentMessage$ = this.messageSource.asObservable();

    constructor() {}

    changeMessage(message: { id: MessageIds; data: any }) {
        this.messageSource.next(message);
    }


    mapDistributionData(
        distData: Array<{
            timestamp: number;
            countAndDwell: Array<{
                attributes: object;
            }>;
        }>,
        ids: Array<string>
    ): Map<string, Array<any>> {
        const idDataMap = new Map();
        ids.forEach((id) => {
            const hourDataMap = new Array();
            distData.forEach((data) => {
                if (data.countAndDwell) {
                    const d = Object.values(data.countAndDwell).find((val) =>
                        Object.values(val.attributes).find(
                            (v) => v.locationId === id
                        )
                    );
                    if (d) {
                        hourDataMap.push({
                            timestamp: data.timestamp,
                            val: d.attributes,
                        });
                    } else {
                        hourDataMap.push({
                            timestamp: data.timestamp,
                            val: null,
                        });
                    }
                } else {
                    hourDataMap.push({ timestamp: data.timestamp, val: null });
                }
            });
            idDataMap.set(id, hourDataMap);
        });
        return idDataMap;
    }
    
    webSocketMessage(message: { id: MessageIds; data: any; body: any }) {
        this.websocketMessageSource.next(message);
    }
 
}
