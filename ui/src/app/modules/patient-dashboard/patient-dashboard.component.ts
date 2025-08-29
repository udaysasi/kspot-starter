import { Component, inject, signal, computed } from '@angular/core';
import { CommonModule, DatePipe, CurrencyPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';

type Overview = {
	profile: { name: string; mrn: string; age: number; primaryProvider: string };
	kpis: {
		nextAppointment?: { date: string; provider: string; location: string; type?: string };
		activePrescriptions: number;
		unreadMessages: number;
		labResultsPending: number;
		busyStatus: number;
	};
	appointments: any[];
	medications: any[];
	labs: any[];
	bills: any[];
	messages: any[];
};

@Component({
	selector: 'app-patient-dashboard',
	standalone: true,
	imports: [CommonModule, DatePipe, CurrencyPipe],
	templateUrl: './patient-dashboard.component.html',
	styleUrls: ['./patient-dashboard.component.scss'],
})
export class PatientDashboardComponent {
	private http = inject(HttpClient);

	loading = signal(false);
	data = signal<Overview | null>(null);
	lookbackMin = computed(() => Number((window as any).__LOOKBACK_MIN__ ?? 15));

	ngOnInit() {
		this.load();
	}

	async load() {
		this.loading.set(true);
		try {
			const res = await this.http.get<Overview>('/api/v1/patient/overview').toPromise();
			this.data.set(res || null);
		} finally {
			this.loading.set(false);
		}
	}
}
