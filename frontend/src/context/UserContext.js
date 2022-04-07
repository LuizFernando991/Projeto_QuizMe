import { createContext, useEffect, useState } from 'react'


export const UserContext = createContext()

export function UserContextProvider({children}){

    const [ authenticated, setAuthenticated ] = useState(false)

    useEffect(()=>{
        if(localStorage.getItem('token')){
            setAuthenticated(true)
        }
    }, [])

    return <UserContext.Provider value={{authenticated, setAuthenticated}}>{children}</UserContext.Provider>
}