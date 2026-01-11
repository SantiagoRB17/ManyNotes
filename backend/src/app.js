import express from 'express'
import { router as noteRouter } from './routes/NoteRoutes.js'
import { router as userRouter } from './routes/UserRoutes.js'
import { connectMongoDB } from './repositories/BD.js'
import dotenv from "dotenv"

try {
  dotenv.config();
  const app = express()
  app.use(express.json())
  app.use('/notes', noteRouter)
  app.use('/users', userRouter)
  connectMongoDB()

  const PORT = process.env.PORT ?? 3000

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
  })

} catch (e) {
  console.error(`Failed to start app: ${e.message}`)
}
