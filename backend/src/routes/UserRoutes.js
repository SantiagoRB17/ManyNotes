import { Router } from 'express'
import { UserController } from '../controllers/UserController.js'

export const router = Router()

// Login de usuario
router.post('/login', UserController.login)

// Obtener todos los usuarios
router.get('/', UserController.getAllUsers)

router.get('/:id', UserController.getUserById)

router.post('/register', UserController.createUser)

router.patch('/:id', UserController.updateUser)

router.delete('/:id', UserController.deleteUser)
