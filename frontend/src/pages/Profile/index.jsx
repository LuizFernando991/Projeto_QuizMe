import { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../context/UserContext'
import api from '../../helpers/api'
import notify from '../../helpers/notify'
import * as Styled from './styles'

export function Profile(){

    const { authenticatedUser, setAuthenticatedUser } =  useContext(UserContext)

    useEffect(()=>{
        api.get('/user', {
            headers: {
                Authorization : `Bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        })
            .then((data)=>{
                setAuthenticatedUser(data.data)
            })
            .catch((err)=>{
                notify('Algo deu errado')
            })
        
        
    }, [setAuthenticatedUser])
    

    return(
        <div>{authenticatedUser.qtd_correct_answers} : {authenticatedUser.qtd_wrong_answers} </div>
    )

}