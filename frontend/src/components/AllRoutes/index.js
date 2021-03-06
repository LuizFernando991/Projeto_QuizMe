import { Route, Routes, useLocation } from "react-router-dom"
import { AnimatePresence } from 'framer-motion'
import { Login } from '../../pages/Login'
import { Register } from '../../pages/Register'
import { AuthContainer } from "../AuthContainer"
import { AppContainer } from "../AppContainer"
import { Home } from "../../pages/Home"
import { Profile } from "../../pages/Profile"
import { EditUser } from "../../pages/EditUser"

export function AllRoutes(){

    const location = useLocation()

    return(
        <AnimatePresence>
            
                <Routes location={location} key={location.pathname}>
                    <Route path='/auth' element={<AuthContainer/>}>
                        <Route path='login' element={<Login/>}/>
                        <Route path='register' element={<Register/>}/>  
                    </Route>
                    <Route path='/' element={<AppContainer/>}>
                        <Route path='/' element={<Home/>}/>
                        <Route path='/profile' exact element={<Profile/>}/>
                        <Route path='/profile/edit' exact element={<EditUser/>}/>
                    </Route> 
                </Routes>
            
        </AnimatePresence>
    )
}