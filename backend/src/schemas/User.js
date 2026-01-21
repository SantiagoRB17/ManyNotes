import z from 'zod'

const UserSchema = z.object({
  name: z.string({
    Invalid_type_error: 'El nombre debe ser un texto',
    Required_error: 'El nombre es obligatorio'
  }),
  email: z.string({
    Invalid_type_error: 'El email debe ser un texto',
    Required_error: 'El email es obligatorio'
  }).email({
    message: 'El email debe ser válido'
  }),
  password: z.string({
    Invalid_type_error: 'La contraseña debe ser un texto',
    Required_error: 'La contraseña es obligatoria'
  }).min(6, {
    message: 'La contraseña debe tener al menos 6 caracteres'
  })
})

const UserUpdateSchema = z.object({
  name: z.string({
    Invalid_type_error: 'El nombre debe ser un texto'
  }).optional(),
  email: z.string({
    Invalid_type_error: 'El email debe ser un texto'
  }).email({
    message: 'El email debe ser válido'
  }).optional(),
  password: z.string({
    Invalid_type_error: 'La contraseña debe ser un texto'
  }).min(6, {
    message: 'La contraseña debe tener al menos 6 caracteres'
  }).optional()
})

export function validateUser (user) {
  return UserSchema.safeParse(user)
}

export function validatePartialUser (user) {
  return UserUpdateSchema.safeParse(user)
}
