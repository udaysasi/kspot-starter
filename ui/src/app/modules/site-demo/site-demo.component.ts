import { CommonModule } from '@angular/common';
import { Component, OnInit, computed, effect, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { firstValueFrom } from 'rxjs';
import {
    SiteDemoService,
    Site,
    HourlyDistributionRow
} from './site-demo.service';

// ApexCharts
import {
    NgApexchartsModule,
    ApexAxisChartSeries,
    ApexChart,
    ApexXAxis,
    ApexYAxis,
    ApexStroke,
    ApexDataLabels,
    ApexLegend,
    ApexTooltip,
    ApexTitleSubtitle
} from 'ng-apexcharts';

import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { HelpDialogComponent } from './help-dialog.component';
import { DateTime } from 'luxon';

type LineChartOptions = {
    series: ApexAxisChartSeries;
    chart: ApexChart;
    xaxis: ApexXAxis;
    yaxis: ApexYAxis;
    stroke: ApexStroke;
    dataLabels: ApexDataLabels;
    legend: ApexLegend;
    tooltip: ApexTooltip;
    title?: ApexTitleSubtitle;
    colors?: string[];
};

const MALE_COLOR = '#009490';
const FEMALE_COLOR = '#4C569F';

@Component({
    standalone: true,
    selector: 'app-site-demo',
    imports: [CommonModule, FormsModule, NgApexchartsModule, MatDialogModule],
    templateUrl: './site-demo.component.html'
})
export class SiteDemoComponent implements OnInit {
    // State
    sites = signal<Site[]>([]);
    loadingSites = signal(false);
    errorMsg = signal<string | null>(null);

    selectedSiteId = signal<string | null>(null);
    selectedSite = computed<Site | null>(() =>
        this.sites().find(s => s.id === this.selectedSiteId()) ?? null
    );

    sortedRows = computed(() =>
        [...this.rows()].sort((a, b) => a.timestamp - b.timestamp)
    );

    // Hourly rows for the table + chart
    rows = signal<HourlyDistributionRow[]>([]);
    loadingDist = signal(false);

    hasAnyData = computed(() =>
        this.rows().some(r => (r.male ?? 0) > 0 || (r.female ?? 0) > 0)
    );
    // Apex line chart options
    lineOptions = signal<Partial<LineChartOptions>>({
        series: [],
        chart: { type: 'line', height: 320, toolbar: { show: false }, foreColor: FEMALE_COLOR },
        stroke: { curve: 'smooth', width: 2 },
        dataLabels: { enabled: false },
        legend: { position: 'top', labels: { colors: ['#000'] } },
        tooltip: {
            theme: 'dark',
            x: {
                formatter: (val: number) => this.formatHour(val)
            }
        },
        xaxis: {
            type: 'datetime',
            labels: {
                datetimeUTC: false,
                formatter: (value: string) => this.formatHour(Number(value))
            },
            tickAmount: 24
        },
        yaxis: { labels: { formatter: (v: number) => `${Math.round(v)}` } },
        title: { text: 'Hourly Demographics', style: { fontSize: '16px', fontWeight: '300', color: MALE_COLOR } },
        colors: [MALE_COLOR, FEMALE_COLOR]
    });


    constructor(private api: SiteDemoService, private dialog: MatDialog) {
        effect(() => {
            const id = this.selectedSiteId();
            if (!id) return;
            this.fetchDistributionForToday(id);
        });
    }

    async ngOnInit() {
        this.loadingSites.set(true);
        this.errorMsg.set(null);
        try {
            const list = await firstValueFrom(this.api.getSites());
            console.log(list);
            this.sites.set(list);
            if (list.length) this.selectedSiteId.set(list[0].id); // select first by default
        } catch (e: any) {
            this.errorMsg.set(e?.message || 'Failed to load sites');
        } finally {
            this.loadingSites.set(false);
        }
    }

    selectSite(siteId: string) {
        if (this.selectedSiteId() === siteId) return;
        this.selectedSiteId.set(siteId);
    }

    /** Compute today's start/end (local timezone) */
    private getTodayRangeMs(): { start: number; finish: number } {
        const now = new Date();
        const start = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0, 0).getTime();
        const finish = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59, 999).getTime();
        return { start, finish };
    }

    private updateChart(rows: HourlyDistributionRow[]) {
        const male = rows.map(r => ({ x: r.timestamp, y: r.male }));
        const female = rows.map(r => ({ x: r.timestamp, y: r.female }));

        this.lineOptions.set({
            ...this.lineOptions(),
            series: [
                { name: 'Male', data: male, color: MALE_COLOR as any },
                { name: 'Female', data: female, color: FEMALE_COLOR as any }
            ]
        });
    }
    
    private getDayRangeInZone(tz: string): { start: number; finish: number } {
      const now = DateTime.now().setZone(tz);
      return {
        start: now.startOf('day').toMillis(),
        finish: now.endOf('day').toMillis()
      };
    }

    async fetchDistributionForToday(siteId: string) {
        this.loadingDist.set(true);
        this.errorMsg.set(null);
        try {
            const tz = this.selectedSite()?.timeZoneId
                  ?? Intl.DateTimeFormat().resolvedOptions().timeZone;
                const { start, finish } = this.getDayRangeInZone(tz);
            const data = await firstValueFrom(this.api.getHourlyDistribution(siteId, start, finish));
            this.rows.set(data);
            this.updateChart(data);
        } catch (e: any) {
            this.errorMsg.set(e?.message || 'Failed to load distribution data');
            this.rows.set([]);
            this.updateChart([]);
        } finally {
            this.loadingDist.set(false);
        }
    }

    formatHour(ts: number): string {
        return new Date(ts).toLocaleTimeString([], { hour: 'numeric' }); // local TZ
    }


    totalMale = computed(() => this.rows().reduce((s, r) => s + r.male, 0));
    totalFemale = computed(() => this.rows().reduce((s, r) => s + r.female, 0));

    floorCount(site: Site | null): number {
        return site?.floors?.length ?? 0;
    }

    totalZoneCount(site: Site | null): number {
        return (site?.floors ?? []).reduce((acc, f) => acc + (f.zonecount ?? 0), 0);
    }

    openHelp() {
        const { start, finish } = this.getTodayRangeMs();
        this.dialog.open(HelpDialogComponent, {
            width: '640px',
            data: {
                siteName: this.selectedSite()?.name ?? null,
                siteId: this.selectedSiteId(),
                start, finish,
                timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
				public: true,
                endpoints: {
                    sites: '/api/v1/locations/sites',
                    distribution: '/api/v1/camera/analytics/distribution'
                },
                payload: {
                    distributionTiming: 'hourly',
                    start,
                    finish,
                    locations: [this.selectedSiteId()],
                    attributes: ['male', 'female']
                }
            }
        });
    }
}
