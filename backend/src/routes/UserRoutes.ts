import express from 'express'
import UserController from '../controllers/UserController'
import verifyToken from '../helpers/verify-token'
import imageUpload from '../helpers/image-upload'
const router = express.Router()

router.get('/', verifyToken, UserController.getUser)
router.post('/login', UserController.loginUser)
router.post('/register', UserController.registerUser)
router.post('/userAnwser', verifyToken, UserController.newUserAnwser)

//imageUpload.single('image')

export default router