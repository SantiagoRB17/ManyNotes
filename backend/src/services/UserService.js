import UserRepository from '../repositories/MongoDB/UserRepository.js'
import { hashPassword, verifyPassword } from '../utils/auth.js'

const userRepository = new UserRepository()

export class UserService {
  static async createUser ({ name, email, password }) {
    // Verificar si el email ya existe
    const existingUser = await userRepository.findByEmail({ email })
    if (existingUser) {
      throw new Error('El email ya está registrado')
    }

    // Hashear la contraseña antes de guardar
    const hashedPassword = await hashPassword(password)

    const user = await userRepository.createUser({ name, email, password: hashedPassword })

    return user
  }

  static async getUserById (id) {
    const user = await userRepository.findById({ id })
    return user
  }

  static async getAllUsers () {
    const users = await userRepository.findAll()
    return users
  }

  static async updateUser (id, updateData) {
    console.log('📝 updateUser recibió:', { id, updateData })

    // Si se está actualizando el email, verificar que no esté en uso
    if (updateData.email) {
      const existingUser = await userRepository.findByEmail({ email: updateData.email })
      if (existingUser && existingUser._id.toString() !== id) {
        throw new Error('El email ya está registrado por otro usuario')
      }
    }

    // Hashear la contraseña si se proporciona
    if (updateData.password) {
      updateData.password = await hashPassword(updateData.password)
    }

    const user = await userRepository.updateUser({ id, ...updateData })
    return user
  }

  static async deleteUser (id) {
    const user = await userRepository.deleteUser({ id })
    return user
  }

  static async authenticateUser ({ email, password }) {
    console.log('🔑 authenticateUser - email:', email)

    // Buscar usuario por email
    const user = await userRepository.findByEmail({ email })
    if (!user) {
      throw new Error('Credenciales inválidas')
    }

    // Verificar contraseña
    const isPasswordValid = await verifyPassword(password, user.password)
    if (!isPasswordValid) {
      throw new Error('Credenciales inválidas')
    }

    // Retornar usuario sin contraseña
    const { password: _, ...userWithoutPassword } = user.toObject()
    return userWithoutPassword
  }
}
