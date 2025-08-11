import { Router } from 'express';
import userController from '../controller/userController.js'
import { validate } from '../middlewares/validationMiddleware.js';
import { userSchema } from '../schema/userSchema.js';

const router = Router()
//rota de antes de ir para o controler(enviar os dados confirmar se o usuario ja nao esta cadastrao utilizando a validacao do schema(zod)
router.post('/users', validate(userSchema),  userController.creatUserController)
router.get('/users', userController.findAllUserController)
router.get('/users/:id', userController.findUserByIdController)
router.put('/users/:id', validate(userSchema), userController.updateUserController)

export default router