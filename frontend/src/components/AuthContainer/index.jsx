import { Outlet } from 'react-router-dom'
import * as Styled from './styles'

export function AuthContainer(){

    return(
        <Styled.Container>
            <Outlet/>
        </Styled.Container>  
    )
}   