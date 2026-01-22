import express from 'express'
import { router } from './routes/Routes.js'
import { connectMongoDB } from './repositories/BD.js'
import dotenv from 'dotenv'
import morgan from 'morgan'
import cookieParser from 'cookie-parser'

dotenv.config()

const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(morgan('short'))
app.use(router)

connectMongoDB()

const PORT = process.env.PORT ?? 3000

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
