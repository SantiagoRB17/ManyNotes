import { Router } from 'express'
import { router as noteRouter } from './NoteRoutes.js'
import { router as userRouter } from './UserRoutes.js'

export const router = Router()

router.use('/notes', noteRouter)
router.use('/users', userRouter)
