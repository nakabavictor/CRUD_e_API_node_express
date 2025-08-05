import { Router } from 'express';
import userController from '../controller/userController.js'

const router = Router()

router.post('/users', userController.creatUserController)

export default router