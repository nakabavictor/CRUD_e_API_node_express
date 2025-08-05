import { Router } from 'express';
import userController from '../controller/userController.js'
import { validate } from '../middlewares/validationMiddleware.js';
import { userSchema } from '../schema/userSchema.js';

const router = Router()

router.post('/users', validate(userSchema),  userController.creatUserController)

export default router