import { Router } from 'express'
import { NoteController } from '../controllers/NoteController.js'

export const router = Router()


router.get('/', NoteController.getAllNotes)

router.get('/user/:userId', NoteController.getNotesByUser)

router.get('/:id', NoteController.getNoteById)

router.post('/', NoteController.createNote)

router.patch('/:id', NoteController.updateNote)

router.delete('/:id', NoteController.deleteNote)
