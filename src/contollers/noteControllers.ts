import { Request, Response } from 'express';
import Note, { INote } from '../models/Note';

// Get all notes
export const getNotes = async (req: Request, res: Response) => {
  try {
    const notes = await Note.find();
    res.json(notes);
  } catch (error) {
    res.status(500).json({ message: 'Failed to retrieve notes' });
  }
};

// Create a new note
export const createNote = async (req: Request, res: Response) => {
  const { title, content } = req.body;

  try {
    const newNote: INote = new Note({
      title,
      content
    });

    await newNote.save();
    res.status(201).json(newNote);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create note' });
  }
};

// Update a note
export const updateNote = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, content } = req.body;

  try {
    const updatedNote = await Note.findByIdAndUpdate(id, { title, content }, { new: true });
    res.json(updatedNote);
  } catch (error) {
    res.status(500).json({ message: 'Failed to update note' });
  }
};

// Delete a note
export const deleteNote = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    await Note.findByIdAndDelete(id);
    res.json({ message: 'Note deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete note' });
  }
};
