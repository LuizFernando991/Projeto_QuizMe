import { useState } from 'react'
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

    async function handleOnStartButtonClick(){
        await RequestNewQuestion()
        setStart(true)      
    }

    async function RequestNewQuestion(){
        setLoading(true)
        await api.get('/question/newquestion', {
            headers: {
                Authorization : `Bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        })
            .then((res)=>{
                setQuestion(res.data.data)
                setLoading(false)
            })
            .catch((err)=>{
                notify('Algo deu errado')
                setLoading(false)
            })
    }

    return(
        <>
        { start ? 
            <Styled.QuestionContainer>
                {
                    question ? 
                        <h2>{parse(question.question)}</h2> : <div></div>
                }
                <Styled.AnswerContainer>
                {
                    question ?  
                        question.allAnswers.map((answer, index)=> <Answer key={index} index={index} answer={answer}/>) :
                        <div></div> 
                }
                </Styled.AnswerContainer>
                
            </Styled.QuestionContainer> 
            :
            <Styled.ContainerStartButton>
                <Styled.TextContainer><h2>Você consegue responder à essas perguntas?</h2></Styled.TextContainer>
                <button onClick={handleOnStartButtonClick}>{loading ? <AnimatedLoading/> : "Iniciar"}</button>
            </Styled.ContainerStartButton>
        }
        </>
    )
}