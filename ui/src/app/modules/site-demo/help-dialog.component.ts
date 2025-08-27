import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MatDialogModule, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

export interface HelpDialogData {
    siteName?: string | null;
    siteId?: string | null;
    start: number;
    finish: number;
    timezone: string;
	public?: boolean,
    endpoints: { sites: string; distribution: string };
    payload: unknown;
}

@Component({
    standalone: true,
    selector: 'app-help-dialog',
    imports: [CommonModule, MatDialogModule],
    template: `
    <h2 mat-dialog-title class="text-xl font-bold text-primary">API Calls on this Page</h2>
	<mat-dialog-content class="mt-2 space-y-4">
		<div *ngIf="data.public" class="font-sm mb-1 text-primary">(All the APIs on this page are public APIs. Authentication is done via a JWT token)</div>
      <div class="text-sm">
        <div><span class="font-bold">Selected Site:</span> {{ data.siteName || '(none)' }} ({{ data.siteId || '—' }})</div>
        <div><span class="font-bold">Timezone:</span> {{ data.timezone }}</div>
        <div>
          <span class="font-bold">Range:</span>
          {{ data.start | date:'MMM d, y, h:mm a' }} — {{ data.finish | date:'MMM d, y, h:mm a' }}
        </div>
      </div>

      <div>
        <h3 class="font-semibold mb-1">1) {{ data.endpoints.sites }}</h3>
		<p class="text-sm text-gray-600">Fetch list of sites (id, name, timezone, address, floors → zonecount).</p>
        <pre class="rounded p-3 text-xs overflow-auto kloud-card">GET {{ data.endpoints.sites }}</pre>
      </div>

      <div>
        <h3 class="font-semibold mb-1">2) {{ data.endpoints.distribution }}</h3>
        <p class="text-sm text-gray-600">Hourly distribution of male/female counts for the selected site.</p>
        <div class="text-xs font-bold mb-1">Sample Request Payload</div>
        <pre class="rounded p-3 text-xs overflow-auto kloud-card">{{ data.payload | json }}</pre>
      </div>
    </mat-dialog-content>

    <mat-dialog-actions align="end" class="mt-4">
      <button (click)="close()" class="px-4 py-2 rounded hover:opacity-90 primary-button">Close</button>
    </mat-dialog-actions>
  `
})
export class HelpDialogComponent {
    constructor(
        @Inject(MAT_DIALOG_DATA) public data: HelpDialogData,
        private ref: MatDialogRef<HelpDialogComponent>
    ) { }
    close() { this.ref.close(); }
}
