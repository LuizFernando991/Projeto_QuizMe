import express, { Request, Response, Application, NextFunction} from 'express'
import cors from 'cors'
//Routes
import UserRoutes from './routes/UserRoutes'
import QuestionRoutes from './routes/QuestionRoutes'
//Init express
const app : Application = express()
//Config JSON req/res
app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())
//Solve CORS
app.use(cors({ credentials : true, origin : 'http://localhost:3000'}))
//Public folder
app.use(express.static(__dirname + '/public'))
//Routes
app.use('/user', UserRoutes)
app.use('/question', QuestionRoutes)

app.listen(5050, ()=> console.log('Server rodando'))
