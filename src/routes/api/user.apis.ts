import express, { Router } from 'express'
import { UserController } from '../../api/controllers/user.controller'
import { validateUserFields, passwordValidations } from '../../api/middleware/user.middleware'
const router: Router = express.Router()

const userController = new UserController()

router.get('/', userController.getAllUsers)
router.post('/register', passwordValidations, userController.createUser)
router.post('/login', userController.loginUser)
router.put('/:id', userController.updateUser)
router.put('/change-password/:id', userController.changePassword)

export default router
