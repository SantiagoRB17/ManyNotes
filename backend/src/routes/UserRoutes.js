import { Router } from 'express'
import { UserController } from '../controllers/UserController.js'
import { authMiddleware } from '../utils/auth.js'

export const router = Router()

// Rutas publicas
router.post('/login', UserController.login)

router.post('/register', UserController.createUser)

// Rutas protegidas
router.get('/', authMiddleware, UserController.getAllUsers)

router.get('/:id', authMiddleware, UserController.getUserById)

router.patch('/:id', authMiddleware, UserController.updateUser)

router.delete('/:id', authMiddleware, UserController.deleteUser)
