// como no es typescript es importante poner las extenciones al final de los import
import Note from './models/note.js'

console.log('AAAAAAAAAA')

const miNota = new Note({ title: 'Cuernavaca', content: 'ESta es un lorem ipsum escrito a mano por la fucking bestia.' })

// async = promesa
console.log(`Mi nota stats: ${await miNota.getTitle()}\n ${miNota.getContent()} `)
