import { Router } from 'express';
import { getNotes, createNote, updateNote, deleteNote, getNoteById } from '../contollers/noteControllers';

const router = Router();

router.get('/notes', getNotes);
router.get('/notes/:id', getNoteById);
router.post('/notes', createNote);
router.put('/notes/:id', updateNote);
router.delete('/notes/:id', deleteNote);

export default router;
