import { randomUUID } from 'node:crypto'
import Note from '../models/note.js'

export class NoteService {
  static async createNote ({ title, content }) {
    const id = randomUUID()
    const createdAt = new Date().toISOString()
    const note = new Note({ id, title, content, createdAt })
    // Aquí se guarda la nota en una base de datos
    return note
  }

  static async getNoteById (id) {
    // Aquí se recupera la nota de una base de datos usando el id
    return 'Nota encontrada con exito: ' + id // -> Cambiar por nota recuperada
  }

  static async getAllNotes () {
    // Aquí se recuperan todas las notas de una base de datos
    return [] // -> Cambiar por lista de notas recuperadas
  }
}
