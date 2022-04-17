import parse from 'html-react-parser'
import * as Styled from './styles'

export function Answer({answer, index, onClick, correctAnswer, currentAnswer, revealCorrectAnswer}){

    const isCorrectAnswer = answer  === correctAnswer
    const isWrongAnswer = currentAnswer === answer && answer !== correctAnswer
    const isSelected = currentAnswer === answer

    

    return(
        <Styled.Container onClick={()=>onClick(answer)} revealCorrectAnswer={revealCorrectAnswer}  isCorrectAnswer={isCorrectAnswer} isSelected={isSelected} isWrongAnswer={isWrongAnswer}>
            <span>{(index + 10).toString(36).toUpperCase()}.</span> {parse(answer)}
        </Styled.Container>
    )
}