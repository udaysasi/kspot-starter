import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import JSZip from 'jszip';
import { lastValueFrom } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class FileService {
    private _httpClient = inject(HttpClient);

    async downloadAndExtractZip(url: string): Promise<Map<string, string>> {
        const fileMap = new Map<string, string>();

        // Fetch the zip file
        const zipBlob$ = this._httpClient.get(url, { responseType: 'blob' });
        const zipBlob = await lastValueFrom(zipBlob$);
        // Load the ZIP in JSZip
        const zip = new JSZip();
        const content = await zip.loadAsync(zipBlob);

        // Extract all files into memory
        for (const relativePath in content.files) {
            const file = content.files[relativePath];
            if (!file.dir) {
                const fileContent = await file.async('blob');
                const fileUrl = URL.createObjectURL(fileContent);
                fileMap.set(relativePath, fileUrl); // Store in-memory URL
            }
        }

        return fileMap;
    }
}
