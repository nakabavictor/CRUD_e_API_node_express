import {z} from 'zod'

const userSchema = z.object({
    username: z.string().min(5, {message: "O username deve ter no minimo 5 caracteres"}).max(20, { message: "O username deve ter no máximo 20 caracteres." }).regex(/^[a-zA-Z0-9_\-]+$/, { message: "O username pode conter apenas letras, números, underscores e hífens." }),
    email: z.email().transform(val => val.trim().toLowerCase()),
    password: z.string().min(8, {message: "A senha deve conter pelo menos 8 caracteres."}),
    avatar: z.string.url('URL invalida.').optional(),
})

export default {
    userSchema
}