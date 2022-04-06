import { Request, Response } from 'express'
import axios from 'axios'

interface Question {
    question : string;
    allAnswers : Array<string>;
    correctAnswer : string;
}


export default class QuestionController{

    public static async getQuestion (req : Request, res : Response) : Promise<Response>{
    
        const data = await axios.get(`https://opentdb.com/api.php?amount=1&category=9&type=multiple`)
        const NewQuestion = data.data.results[0]
        if(data){
            const question : string = NewQuestion.question
            const allAnswers : Array<string> = NewQuestion.incorrect_answers
            const correctAnswer : string = NewQuestion.correct_answer
            allAnswers.push(correctAnswer)
            const questionData : Question = {
                question,
                allAnswers,
                correctAnswer,
            }
            return res.status(200).json({ data : questionData})
        }else{
            return res.status(503).json({ message : 'question not found'})
        }
    }
}      