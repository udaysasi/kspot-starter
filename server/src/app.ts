import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { generatedRoutes } from './generatedRoutes.js';
import { patientRoutes } from './routes/patient.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json({ limit: '2mb' }));

// Mount generated routes at root so paths from spec (which include /api/v1/...) are preserved
app.use('/', generatedRoutes);

//Use a separate routing file for all Patient Info
app.use('/api/v1/patient', patientRoutes);

// Health check
app.get('/health', (_req, res) => res.status(200).json({ ok: true }));

// Basic error handler
app.use((err: any, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
  console.error('Unhandled error:', err);
  res.status(500).json({ error: 'Internal server error' });
});

export default app;
