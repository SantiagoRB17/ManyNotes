import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { getRequiredVar } from '../utils/env.js'

const SALT_ROUNDS = 10

export async function hashPassword (password) {
  try {
    const salt = await bcrypt.genSalt(SALT_ROUNDS)
    const hashedPassword = await bcrypt.hash(password, salt)
    return hashedPassword
  } catch (error) {
    throw new Error('Error al hashear la contraseña: ' + error.message)
  }
}

export async function verifyPassword (password, hashedPassword) {
  try {
    const isMatch = await bcrypt.compare(password, hashedPassword)
    return isMatch
  } catch (error) {
    throw new Error('Error al verificar la contraseña: ' + error.message)
  }
}

export const authMiddleware = (req, res, next) => {
  const token = req.cookies.access_token

  if (!token) {
    return res.status(401).json({ error: 'No autenticado' })
  }

  try {
    const decoded = jwt.verify(token, getRequiredVar('SECRET_JWT_KEY'))
    req.user = decoded
    next()
  } catch (error) {
    return res.status(401).json({ error: 'Token inválido o expirado' })
  }
}
