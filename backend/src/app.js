import express from 'express'
import { router } from './routes/NoteRoutes.js'
import { connectDB } from './repositories/BD.js'
import dotenv from "dotenv"


dotenv.config();
const app = express()
app.use(express.json())
app.use('/notes', router)
connectDB()


const PORT = process.env.PORT ?? 3000

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
