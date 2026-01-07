import express from 'express'
import { router } from './routes/NoteRoutes.js'

const app = express()
app.use(express.json())
app.use('/notes', router)

const PORT = process.env.PORT ?? 3000

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
