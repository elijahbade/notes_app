import { Router } from 'express';
import { getNotes, createNote, updateNote, deleteNote } from '../contollers/noteControllers';

const router = Router();

router.get('/notes', getNotes);
router.post('/notes', createNote);
router.put('/notes/:id', updateNote);
router.delete('/notes/:id', deleteNote);

export default router;
