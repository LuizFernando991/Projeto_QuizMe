import { createContext, useEffect, useState } from 'react'
import api from '../helpers/api'
import notify from '../helpers/notify'


export const UserContext = createContext()

export function UserContextProvider({children}){

    const [ authenticated, setAuthenticated ] = useState(false)
    const [ authenticatedUser, setAuthenticatedUser ] = useState('')

    useEffect(()=>{
        if(localStorage.getItem('token')){
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
        }
    }, [])

    return <UserContext.Provider value={{authenticated, setAuthenticated, authenticatedUser, setAuthenticatedUser}}>{children}</UserContext.Provider>
}