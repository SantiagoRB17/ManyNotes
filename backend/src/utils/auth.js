import bcrypt from 'bcrypt'

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
