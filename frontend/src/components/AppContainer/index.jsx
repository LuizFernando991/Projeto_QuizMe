import { useContext } from 'react'
import { UserContext } from '../../context/UserContext'
import { Outlet, Link } from 'react-router-dom'
import { Logo } from '../Logo'
import DefaultUserImage from '../../Images/default-user.jpg'
import * as Styled from './styles'


export function AppContainer(){

    const { authenticatedUser } = useContext(UserContext)

    return(
        <>
            <Styled.Nav>
                <Link to='/'><Logo /></Link>
                <Link to='/profile'>
                    <Styled.ImgContainer>
                        {
                            authenticatedUser.image ? 
                                <img src={process.env.REACT_APP_API} alt={authenticatedUser.name} />
                                :
                                <img src={DefaultUserImage} alt={authenticatedUser.name}/>
                        }       
                    </Styled.ImgContainer>
                </Link>
                
            </Styled.Nav>
            <Outlet/>
        </>
    )
}