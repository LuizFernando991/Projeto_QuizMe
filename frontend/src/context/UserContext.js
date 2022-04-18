import { createContext, useEffect, useState } from 'react'
import api from '../helpers/api'
import notify from '../helpers/notify'


export const UserContext = createContext()

export function UserContextProvider({children}){

    const [ token, setToken ] = useState('')
    const [ authenticated, setAuthenticated ] = useState(false)
    const [ authenticatedUser, setAuthenticatedUser ] = useState('')

    const localToken = localStorage.getItem('token')

    useEffect(()=>{
        if(localToken){
            setToken(localToken)
        }    
    }, [localToken])

    useEffect(()=>{
        console.log('chamou')
        if(token){
            api.get('/user', {
                headers: {
                    Authorization : `Bearer ${JSON.parse(localStorage.getItem('token'))}`
                }
            })
                .then((data)=>{
                    setAuthenticated(true)
                    setAuthenticatedUser(data.data)
                })
                .catch((err)=>{
                    notify('Algo deu errado')
                })
        }else{
            setAuthenticated(false)
        }
    }, [token])

    return <UserContext.Provider value={{authenticated, setAuthenticated, authenticatedUser, setAuthenticatedUser}}>{children}</UserContext.Provider>
}