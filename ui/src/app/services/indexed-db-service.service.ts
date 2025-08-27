import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class IndexedDbService {
    private db: IDBDatabase | null = null;
    private readonly dbName = 'Kloudspot';
    private readonly storeName = 'zips';
    private readonly dbVersion = 1;

    constructor() {}

    private async openDb(): Promise<void> {
        if (this.db) return;

        this.db = await new Promise<IDBDatabase>((resolve, reject) => {
            const request = indexedDB.open(this.dbName, this.dbVersion);

            request.onupgradeneeded = (event: IDBVersionChangeEvent) => {
                const db = (event.target as IDBOpenDBRequest).result;

                if (db.objectStoreNames.contains(this.storeName)) {
                    db.deleteObjectStore(this.storeName); // ensures compatibility when changing keyPath
                }

                db.createObjectStore(this.storeName, {
                    keyPath: 'id',
                    autoIncrement: false, // now we use URL or custom string keys
                });
            };

            request.onsuccess = (event) => {
                resolve((event.target as IDBOpenDBRequest).result);
            };

            request.onerror = (event) => {
                reject(
                    `IndexedDB error: ${(event.target as IDBRequest).error}`
                );
            };
        });
    }

    async storeZipFile(file: File | Blob, key: string): Promise<string> {
        await this.openDb();

        return new Promise((resolve, reject) => {
            const transaction = this.db!.transaction(
                [this.storeName],
                'readwrite'
            );
            const store = transaction.objectStore(this.storeName);

            const record = { id: key, file };
            const request = store.put(record); // use put for "upsert"

            request.onsuccess = () => {
                resolve(key);
            };

            request.onerror = () => {
                reject(request.error);
            };
        });
    }

    async getZipFile(key: string): Promise<Blob | File | null> {
        await this.openDb();

        return new Promise((resolve, reject) => {
            const transaction = this.db!.transaction(
                [this.storeName],
                'readonly'
            );
            const store = transaction.objectStore(this.storeName);

            const request = store.get(key);

            request.onsuccess = () => {
                const record = request.result;
                resolve(record ? record.file : null);
            };

            request.onerror = () => {
                reject(request.error);
            };
        });
    }

    async deleteZipFile(key: string): Promise<void> {
        await this.openDb();

        return new Promise((resolve, reject) => {
            const transaction = this.db!.transaction(
                [this.storeName],
                'readwrite'
            );
            const store = transaction.objectStore(this.storeName);

            const request = store.delete(key);

            request.onsuccess = () => {
                resolve();
            };

            request.onerror = () => {
                reject(request.error);
            };
        });
    }

    async deleteAllZipFile(): Promise<void> {
        await this.openDb();

        return new Promise((resolve, reject) => {
            const transaction = this.db!.transaction(
                [this.storeName],
                'readwrite'
            );
            const store = transaction.objectStore(this.storeName);

            const request = store.clear();

            request.onsuccess = () => {
                resolve();
            };

            request.onerror = () => {
                reject(request.error);
            };
        });
    }

    async listAllZipUrls(): Promise<string[]> {
        await this.openDb();

        return new Promise((resolve, reject) => {
            const transaction = this.db!.transaction(
                [this.storeName],
                'readonly'
            );
            const store = transaction.objectStore(this.storeName);
            const request = store.getAllKeys();

            request.onsuccess = () => {
                resolve(request.result as string[]);
            };

            request.onerror = () => {
                reject(request.error);
            };
        });
    }
}
