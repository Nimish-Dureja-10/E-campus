import express from 'express';
import { createSubmission } from '../controllers/submissionAssignment.js';

const router = express.Router();

router.post('/submission/:id', createSubmission);

export default router;