import z from 'zod'

const NoteSchema = z.object({
  title: z.string({
    Invalid_type_error: 'El titulo debe ser un texto',
    Required_error: 'El titulo es obligatorio'
  }),
  content: z.string({
    Invalid_type_error: 'El contenido debe ser un texto',
    Required_error: 'El contenido es obligatorio'
  })
})

const NoteUpdateSchema = z.object({
  title: z.string({
    Invalid_type_error: 'El titulo debe ser un texto'
  }).optional(),
  content: z.string({
    Invalid_type_error: 'El contenido debe ser un texto'
  }).optional()
})

export function validateNote (note) {
  return NoteSchema.safeParse(note)
}

export function validatePartialNote (note) {
  return NoteUpdateSchema.safeParse(note)
}
