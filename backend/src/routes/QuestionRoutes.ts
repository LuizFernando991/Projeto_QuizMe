import express from 'express'
import verifyToken from '../helpers/verify-token'
import QuestionController from '../controllers/QuestionController'
const router = express.Router()

router.get('/newquestion', verifyToken, QuestionController.getQuestion)


export default router