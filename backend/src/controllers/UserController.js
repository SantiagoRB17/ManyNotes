import { UserService } from '../services/UserService.js'
import { validateUser, validatePartialUser } from '../schemas/User.js'

export class UserController {
  static async createUser (req, res) {
    const validation = validateUser(req.body)

    if (!validation.success) {
      return res.status(400).json({ error: JSON.parse(validation.error.message) })
    }

    try {
      const newUser = await UserService.createUser(validation.data)
      // No devolver la contraseña en la respuesta
      const { password, ...userWithoutPassword } = newUser.toObject()
      res.status(201).json(userWithoutPassword)
    } catch (error) {
      res.status(400).json({ error: error.message })
    }
  }

  static async getUserById (req, res) {
    const { id } = req.params
    try {
      const user = await UserService.getUserById(id)
      if (user === null) {
        return res.status(404).json({ error: 'Usuario no encontrado' })
      }

      // No devolver la contraseña en la respuesta
      const { password, ...userWithoutPassword } = user.toObject()
      res.status(200).json(userWithoutPassword)
    } catch (error) {
      res.status(400).json({ error: error.message })
    }
  }

  static async getAllUsers (req, res) {
    try {
      const users = await UserService.getAllUsers()
      // No devolver las contraseñas en la respuesta
      const usersWithoutPassword = users.map(user => {
        const { password, ...userWithoutPassword } = user.toObject()
        return userWithoutPassword
      })
      res.status(200).json(usersWithoutPassword)
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  }

  static async updateUser (req, res) {
    const { id } = req.params
    const validation = validatePartialUser(req.body)

    if (!validation.success) {
      return res.status(400).json({ error: JSON.parse(validation.error.message) })
    }

    try {
      const updatedUser = await UserService.updateUser({ id, ...validation.data })
      if (updatedUser === null) {
        return res.status(404).json({ error: 'Usuario no encontrado' })
      }

      // No devolver la contraseña en la respuesta
      const { password, ...userWithoutPassword } = updatedUser.toObject()
      res.status(200).json(userWithoutPassword)
    } catch (error) {
      res.status(400).json({ error: error.message })
    }
  }

  static async deleteUser (req, res) {
    const { id } = req.params
    try {
      const deletedUser = await UserService.deleteUser(id)
      if (deletedUser === null) {
        return res.status(404).json({ error: 'Usuario no encontrado' })
      }

      res.status(200).json({ message: 'Usuario eliminado correctamente' })
    } catch (error) {
      res.status(400).json({ error: error.message })
    }
  }

  static async login (req, res) {
    const { email, password } = req.body

    if (!email || !password) {
      return res.status(400).json({ error: 'Email y contraseña son obligatorios' })
    }

    try {
      const user = await UserService.authenticateUser({ email, password })
      res.status(200).json({ message: 'Login exitoso', user })
    } catch (error) {
      res.status(401).json({ error: error.message })
    }
  }
}
