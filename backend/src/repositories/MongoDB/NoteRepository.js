import mongoose, { Schema }from 'mongoose'; 

// Mongo DB crea el id por si solo entonces no hay necesidad de pasarle ID (para crear).

const NoteSchema = new Schema(
  {
    title: { type: String, required: true, trim: true },
    content: { type: String, required: true },
    createdBy: { type: Schema.Types.ObjectId, ref: 'User', required: true }
  },
  { timestamps: true }
);

const NoteModel = mongoose.model('Note', NoteSchema);

export default class NoteRepository {

  constructor() {
  }

  //CREATE

  async createNote({ title, content, createdBy }) {
    const note = new NoteModel({ title, content, createdBy });
    return await note.save()
  }

  //READ

  async findById({ id }) {
    return await NoteModel.findById(id).populate('createdBy', 'name email');
  }

  async findAll() {
    return await NoteModel.find().populate('createdBy', 'name email');
  }

  async findByUser({ createdBy }) {
    return await NoteModel.find({ createdBy }).populate('createdBy', 'name email');
  }

  //UPDATE

  async updateNote({ title, content, id }) {
    const updateData = {}
    if (title !== undefined) updateData.title = title
    if (content !== undefined) updateData.content = content

    return await NoteModel.findByIdAndUpdate(id, updateData, { new: true })
  }

  //DELETE

  async deleteNote( {id} ) {
    return await NoteModel.findByIdAndDelete(id)
  }
}
