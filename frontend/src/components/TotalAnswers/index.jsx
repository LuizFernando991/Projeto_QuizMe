import { useEffect, useState } from 'react'
import * as Styled from './styles'


export function TotalAnswers({ correctAnswers, wrongAnswers }){

    const [ numQuestions, setNumQuestions ] = useState(0)
    const [ currentNumQuestions, setCurrentNumQuestions ] = useState(0)

    useEffect(()=>{
        setNumQuestions(correctAnswers+wrongAnswers)
    }, [correctAnswers, wrongAnswers])

    useEffect(()=>{
        let time = 1000/numQuestions
        let interval = setInterval(()=>{
            if(numQuestions !== 0 && currentNumQuestions === numQuestions){
                clearInterval(interval)
            }
            if(numQuestions !== 0 && currentNumQuestions < numQuestions){
                setCurrentNumQuestions((e)=>e+1)
            }
        }, time)

        return ()=> clearInterval(interval)
    })

    return(
        <Styled.CounterContainer><h1>{currentNumQuestions}</h1></Styled.CounterContainer>
    )

}