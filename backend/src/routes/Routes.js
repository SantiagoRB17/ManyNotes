import { Router } from 'express'
import { router as noteRouter } from './NoteRoutes.js'
import { router as userRouter } from './UserRoutes.js'
import { authMiddleware } from '../utils/auth.js'

export const router = Router()

router.use('/notes', authMiddleware, noteRouter)
router.use('/users', userRouter)
