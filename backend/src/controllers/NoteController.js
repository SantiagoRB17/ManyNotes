import { NoteService } from '../services/NoteService.js'
import { validateNote } from '../schemas/Note.js'

export class NoteController {
  static async createNote (req, res) {
    const validation = validateNote(req.body)

    if (!validation.success) {
      return res.status(400).json({ error: JSON.parse(validation.error.message) })
    }

    const newNote = await NoteService.createNote(validation.data)
    res.status(201).json(newNote)
  }

  static async getNoteById (req, res) {
    const { id } = req.params
    const note = await NoteService.getNoteById(id)
    if (note === null) {
      return res.status(404).json({ error: 'Nota no encontrada' })
    }

    res.status(200).json(note)
  }
}
