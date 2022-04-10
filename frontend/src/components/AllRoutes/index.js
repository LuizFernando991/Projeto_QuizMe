import { Route, Routes, useLocation } from "react-router-dom"
import { AnimatePresence } from 'framer-motion'
import { Login } from '../../pages/Login'
import { Register } from '../../pages/Register'
import { AuthContainer } from "../AuthContainer"
import { Home } from "../../pages/Home"


export function AllRoutes(){

    const location = useLocation()

    return(
        <AnimatePresence>
            
                <Routes location={location} key={location.pathname}>
                    <Route path='/' element={<Home/>} /> 
                    <Route path='/auth' element={<AuthContainer/>}>
                        <Route path='login' element={<Login/>}/>
                        <Route path='register' element={<Register/>}/>  
                    </Route>
                </Routes>
            
        </AnimatePresence>
    )
}