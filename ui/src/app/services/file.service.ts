import { HttpClient, HttpEvent, HttpEventType } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { convertBlobToMap } from 'app/utils/mapping';
import { IndexedDbService } from './indexed-db-service.service';

@Injectable({
    providedIn: 'root',
})
export class FileService {
    private _httpClient = inject(HttpClient);
    private _indexDbService = inject(IndexedDbService);

    downloadAndExtractZip(
        url: string
    ): Observable<{
        progress: number;
        phase: 'downloading' | 'extracting' | 'completed';
        fileMap?: Map<string, any>;
    }> {
        return new Observable((observer) => {
            this._indexDbService
                .getZipFile(url)
                .then((cachedZip) => {
                    if (cachedZip) {
                        convertBlobToMap(cachedZip, (fileMap) => {
                            observer.next({
                                progress: 100,
                                phase: 'completed',
                                fileMap: fileMap,
                            });
                            observer.complete();
                        });
                    } else {
                        // Not in cache, fetch it
                        this._httpClient
                            .get(`${url}`, {
                                responseType: 'blob',
                                reportProgress: true,
                                observe: 'events',
                            })
                            .subscribe({
                                next: async (event: HttpEvent<Blob>) => {
                                    if (
                                        event.type ===
                                        HttpEventType.DownloadProgress
                                    ) {
                                        const percentDone = event.total
                                            ? (event.loaded / event.total) * 100
                                            : 0;
                                        observer.next({
                                            progress: percentDone,
                                            phase: 'downloading',
                                        });
                                    }

                                    if (event.type === HttpEventType.Response) {
                                        const zipBlob = event.body;
                                        await this._indexDbService.storeZipFile(
                                            zipBlob,
                                            url
                                        );

                                        observer.next({
                                            progress: 100,
                                            phase: 'downloading',
                                        });

                                        convertBlobToMap(zipBlob, (fileMap) => {
                                            observer.next({
                                                progress: 100,
                                                phase: 'completed',
                                                fileMap: fileMap,
                                            });
                                            observer.complete();
                                        });
                                    }
                                },
                                error: (err) => observer.error(err),
                            });
                    }
                })
                .catch((err) => observer.error(err));
        });
    }
}
