import {z} from 'zod'
const userSchema = z.object({
    username: z.string().min(3, "O nome de usuário deve ter pelo menos 3 caracteres"),
    email: z.email("E-mail inválido"),
    password: z.string().min(6, "A senha deve ter pelo menos 6 caracteres"),
    avatar: z.url().optional(),
})
export  {
    userSchema
}