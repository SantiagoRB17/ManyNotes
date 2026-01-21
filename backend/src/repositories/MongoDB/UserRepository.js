import mongoose, { Schema } from 'mongoose'

// Mongo DB crea el id por si solo entonces no hay necesidad de pasarle ID (para crear).

const UserSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, trim: true, lowercase: true },
    password: { type: String, required: true }
  },
  { timestamps: true }
)

const UserModel = mongoose.model('User', UserSchema)

export default class UserRepository {
  constructor () {
  }

  // CREATE

  async createUser ({ name, email, password }) {
    const user = new UserModel({ name, email, password })
    return await user.save()
  }

  // READ

  async findById ({ id }) {
    return await UserModel.findById(id)
  }

  async findAll () {
    return await UserModel.find()
  }

  async findByEmail ({ email }) {
    return await UserModel.findOne({ email })
  }

  // UPDATE

  async updateUser ({ id, name, email, password }) {
    const updateData = {}
    if (name !== undefined) updateData.name = name
    if (email !== undefined) updateData.email = email
    if (password !== undefined) updateData.password = password

    return await UserModel.findByIdAndUpdate(id, updateData, { new: true })
  }

  // DELETE

  async deleteUser ({ id }) {
    return await UserModel.findByIdAndDelete(id)
  }
}
