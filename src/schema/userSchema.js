import {z} from 'zod'

//utilizando a biblioteca zod para verificacao de dados na horaa doo envio de dados de um novo usuario
const userSchema = z.object({
    username: z.string().min(3, "O nome de usuário deve ter pelo menos 3 caracteres"),
    email: z.email("E-mail inválido"),
    password: z.string().min(6, "A senha deve ter pelo menos 6 caracteres"),
    avatar: z.url().optional(),
})

const userIdSchema = z.object({
    userId: z.number().int().positive('User ID tem que ser inteiro e positivo'),
})
export  {
    userSchema,
    userIdSchema
}