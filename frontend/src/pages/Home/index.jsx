import { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../context/UserContext'
import { useNavigate } from 'react-router-dom'
import parse from 'html-react-parser'
import { AnimatedLoading } from '../../components/AnimatedLoading'
import { Answer } from '../../components/Answer'
import api  from '../../helpers/api'
import  notify from '../../helpers/notify'
import * as Styled from './styles'

export function Home(){

    const [ start, setStart ] = useState(false)
    const [ loading, setLoading ] = useState(false)
    const [ question, setQuestion ] = useState('')
    const [ currentAnswer, setCurrentAnswer ] = useState('')
    const [ revealCorrectAnswer, setRevealCorrectAnswer] = useState(false)
    const { authenticated } = useContext(UserContext)

    const navigate = useNavigate()

    useEffect(()=>{
        if(!authenticated){
            navigate('/auth/login')
        }
    })

    async function RequestNewQuestion(){
        setLoading(true)
        await api.get('/question/newquestion', {
            headers: {
                Authorization : `Bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        })
            .then((res)=>{
                setRevealCorrectAnswer(false)
                setLoading(false)
                setQuestion(()=>res.data.data)
                if(!start){
                    setStart(true)
                }
            })
            .catch((err)=>{
                notify('Algo deu errado')
                setLoading(false)
            })
    }

    async function handleOnAnswerClick(answer){
        setCurrentAnswer(answer)
        let isCorrect = answer === question.correctAnswer
        await api.post('/user/userAnswer', { isCorrect },{
            headers: {
                Authorization : `Bearer ${JSON.parse(localStorage.getItem('token'))}`
        }
    })
        .then((res)=>{
            setRevealCorrectAnswer(true)
        })
        .catch((err)=>{
            notify('Algo deu errado')
        })

        
    }

    return(
        <Styled.HomeContainer>
        { start ? 
            <Styled.QuestionContainer>
                {
                    question ? 
                        <h2>{parse(question.question)}</h2> : <div></div>
                }
                <Styled.AnswerContainer>
                {
                    question ?  
                        question.allAnswers.map((answer, index)=> <Answer 
                            key={index} index={index} answer={answer} currentAnswer={currentAnswer} 
                            onClick={handleOnAnswerClick} correctAnswer={question.correctAnswer}
                            revealCorrectAnswer={revealCorrectAnswer}
                            />) 
                        :
                        <div></div> 
                }
                </Styled.AnswerContainer>

                {
                    revealCorrectAnswer ? 
                    <Styled.RevealContainer>
                        <Styled.QuestionsButton onClick={RequestNewQuestion}>{loading ? <AnimatedLoading/> : "Próxima Questão"}</Styled.QuestionsButton>
                    </Styled.RevealContainer>
                    :
                    ''
                }
                
            </Styled.QuestionContainer> 
            :
            <Styled.ContainerStartButton>
                <Styled.TextContainer><h2>Você consegue responder à essas perguntas?</h2></Styled.TextContainer>
                <Styled.QuestionsButton onClick={RequestNewQuestion}>{loading ? <AnimatedLoading/> : "Iniciar"}</Styled.QuestionsButton>
            </Styled.ContainerStartButton>
        }
        </Styled.HomeContainer>
    )
}