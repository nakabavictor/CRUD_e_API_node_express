import { Router } from 'express';
import userController from '../controller/userController'

const router = Router()

router.post('/users', userController.creatUserController)

export default router