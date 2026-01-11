import NoteRepository from '../repositories/MongoDB/NoteRepository.js'

const noteRepository = new NoteRepository()

export class NoteService {
  static async createNote ({ title, content, createdBy }) {
    const note = await noteRepository.createNote({ title, content, createdBy })
    return note
  }

  static async getNoteById (id) {
    const note = await noteRepository.findById({ id })
    return note
  }

  static async getAllNotes () {
    const notes = await noteRepository.findAll()
    return notes
  }

  static async getNotesByUser (userId) {
    const notes = await noteRepository.findByUser({ createdBy: userId })
    return notes
  }

  static async updateNote ({ id, title, content }) {
    const note = await noteRepository.updateNote({ id, title, content })
    return note
  }

  static async deleteNote (id) {
    const note = await noteRepository.deleteNote({ id })
    return note
  }
}
