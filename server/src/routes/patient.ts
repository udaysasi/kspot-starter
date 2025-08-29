import express from 'express';
import { getWaitingRoomCount } from '../metrics/waitingRoom.js';

export const patientRoutes = express.Router();

/**
 * GET /api/v1/patient/overview
 * Returns KPIs + a few sections commonly shown in patient portals.
 * Only Busy Status is live via SDK; the rest is demo data (replace with your sources).
 */
patientRoutes.get('/overview', async (_req, res) => {
	const busy = await getWaitingRoomCount();

	// --- Replace below with your real data sources ---
	const now = new Date();
	const nextAppt = new Date(now.getTime() + 3 * 24 * 60 * 60 * 1000); // +3 days

	const payload = {
		profile: {
			name: 'Jane Doe',
			mrn: 'A102938',
			age: 42,
			primaryProvider: 'Dr. R. Patel',
		},
		kpis: {
			nextAppointment: {
				date: nextAppt.toISOString(),
				provider: 'Dr. R. Patel',
				location: 'Outpatient Clinic – Room 203',
				type: 'Follow-up',
			},
			activePrescriptions: 3,
			unreadMessages: 1,
			labResultsPending: 2,
			busyStatus: busy, // <-- live from SDK
		},
		appointments: [
			{
				id: 'apt-123',
				date: nextAppt.toISOString(),
				provider: 'Dr. R. Patel',
				reason: 'Hypertension follow-up',
				status: 'Scheduled',
				location: 'Outpatient Clinic – Room 203',
			},
			{
				id: 'apt-122',
				date: new Date(now.getTime() - 20 * 24 * 60 * 60 * 1000).toISOString(),
				provider: 'NP M. Alvarez',
				reason: 'Medication review',
				status: 'Completed',
				location: 'Televisit',
			},
		],
		medications: [
			{ name: 'Lisinopril 10 mg', sig: '1 tab PO daily', status: 'Active' },
			{ name: 'Atorvastatin 20 mg', sig: '1 tab PO qhs', status: 'Active' },
			{ name: 'Albuterol HFA', sig: '2 puffs PRN wheeze', status: 'Active' },
		],
		labs: [
			{ name: 'Lipid Panel', status: 'Pending', orderedOn: now.toISOString() },
			{ name: 'A1C', status: 'Pending', orderedOn: now.toISOString() },
			{ name: 'CMP', status: 'Completed', resultOn: new Date(now.getTime() - 7 * 864e5).toISOString() },
		],
		bills: [
			{ id: 'inv-001', date: new Date(now.getTime() - 12 * 864e5).toISOString(), amount: 45.0, status: 'Due' },
		],
		messages: [
			{ id: 'msg-101', from: 'Clinic Staff', subject: 'Pre-visit questionnaire', unread: true },
		],
	};

	res.json(payload);
});
