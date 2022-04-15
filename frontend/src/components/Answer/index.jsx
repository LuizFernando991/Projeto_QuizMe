import parse from 'html-react-parser'
import * as Styled from './styles'

export function Answer({answer, index}){

    return(
        <Styled.Container>
            <span>{(index + 10).toString(36).toUpperCase()}.</span> {parse(answer)}
        </Styled.Container>
    )
}