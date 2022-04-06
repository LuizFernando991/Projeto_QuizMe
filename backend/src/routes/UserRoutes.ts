import express from 'express'
import UserController from '../controllers/UserController'
import verifyToken from '../helpers/verify-token'
import imageUpload from '../helpers/image-upload'
const router = express.Router()

router.get('/', verifyToken, UserController.getUser)
router.post('/login', UserController.loginUser)
router.post('/register', imageUpload.single('image'), UserController.registerUser)
router.post('/userAnwser', verifyToken, UserController.newUserAnwser)


export default router