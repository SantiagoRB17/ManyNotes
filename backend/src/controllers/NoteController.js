import { NoteService } from '../services/NoteService.js'
import { validateNote, validatePartialNote } from '../schemas/Note.js'

export class NoteController {
  static async createNote (req, res) {
    const validation = validateNote(req.body)

    if (!validation.success) {
      return res.status(400).json({ error: JSON.parse(validation.error.message) })
    }

    try {
      const newNote = await NoteService.createNote(validation.data)
      res.status(201).json(newNote)
    } catch (error) {
      res.status(400).json({ error: error.message })
    }
  }

  static async getNoteById (req, res) {
    const { id } = req.params
    try {
      const note = await NoteService.getNoteById(id)
      if (note === null) {
        return res.status(404).json({ error: 'Nota no encontrada' })
      }

      res.status(200).json(note)
    } catch (error) {
      res.status(400).json({ error: error.message })
    }
  }

  static async getAllNotes (req, res) {
    try {
      const notes = await NoteService.getAllNotes()
      res.status(200).json(notes)
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  }

  static async getNotesByUser (req, res) {
    const { userId } = req.params
    try {
      const notes = await NoteService.getNotesByUser(userId)
      res.status(200).json(notes)
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  }

  static async updateNote (req, res) {
    const { id } = req.params
    const validation = validatePartialNote(req.body)

    if (!validation.success) {
      return res.status(400).json({ error: JSON.parse(validation.error.message) })
    }

    try {
      const updatedNote = await NoteService.updateNote({ id, ...validation.data })
      if (updatedNote === null) {
        return res.status(404).json({ error: 'Nota no encontrada' })
      }

      res.status(200).json(updatedNote)
    } catch (error) {
      res.status(400).json({ error: error.message })
    }
  }

  static async deleteNote (req, res) {
    const { id } = req.params
    try {
      const deletedNote = await NoteService.deleteNote(id)
      if (deletedNote === null) {
        return res.status(404).json({ error: 'Nota no encontrada' })
      }

      res.status(200).json({ message: 'Nota eliminada correctamente' })
    } catch (error) {
      res.status(400).json({ error: error.message })
    }
  }
}
