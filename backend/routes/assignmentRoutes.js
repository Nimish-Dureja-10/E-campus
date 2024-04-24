import express from 'express';
import { createassignment, deleteAssignmentById, getAllAssignments, getAssignmentById } from '../controllers/createAssignment.js';

const router = express.Router();

router.post('/assignments', createassignment);
router.get('/assignments', getAllAssignments);
router.get('/assignments/:id', getAssignmentById);
// router.put('/assignments/:id', updateassignmentById);
router.delete('/assignments/:id', deleteAssignmentById);


export default router;