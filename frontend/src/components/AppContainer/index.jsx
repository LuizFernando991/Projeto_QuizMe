import { useEffect, useState } from 'react'
import { Outlet, Link } from 'react-router-dom'
import { Logo } from '../Logo'
import api from '../../helpers/api'
import notify from '../../helpers/notify'
import DefaultUserImage from '../../Images/default-user.jpg'
import * as Styled from './styles'


export function AppContainer(){

    const [ user, setUser ] = useState('')

    useEffect(()=>{
        
        api.get('/user', {
            headers: {
                Authorization : `Bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        })
            .then((data)=>{
                setUser(data.data)
            })
            .catch((err)=>{
                notify('Algo deu errado')
            })
    }, [])

    return(
        <>
            <Styled.Nav>
                <Link to='/'><Logo /></Link>
                <Link to='/profile'>
                    <Styled.ImgContainer>
                        {
                            user.image ? 
                                <img src={process.env.REACT_APP_API} alt={user.name} />
                                :
                                <img src={DefaultUserImage} alt={user.name}/>
                        }       
                    </Styled.ImgContainer>
                </Link>
                
            </Styled.Nav>
            <Outlet/>
        </>
    )
}