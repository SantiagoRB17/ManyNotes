import { Router } from 'express'
import { NoteController } from '../controllers/NoteController.js'

export const router = Router()

router.get('/', (req, res) => {
  res.send('<h1>Hello world</h1>')
})

router.get('/:id', NoteController.getNoteById)

router.post('/', NoteController.createNote)
