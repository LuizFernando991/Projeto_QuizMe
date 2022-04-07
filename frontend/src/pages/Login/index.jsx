import { useState, useContext } from 'react'
import { UserContext } from '../../context/UserContext'
import { Link } from 'react-router-dom'
import { Input } from '../../components/Input'
import { SubmitButton } from '../../components/SubmitButton'
import { Logo } from '../../components/Logo'
import notify from '../../helpers/notify'
import api from '../../helpers/api'
import * as Styled from './styles'



export function Login(){

    const [ user, setUser ] = useState({})
    const { authenticated, setAuthenticated } = useContext(UserContext)
   
    function handleOnSubmit(e){
        e.preventDefault()
        api.post('/user/login', user)
            .then((data)=>{
                localStorage.setItem('token', JSON.stringify(data.data.token))
                setAuthenticated(true)
                console.log(authenticated)
            })
            .catch((err)=>{
                let msg
                if(err.response.data.message === 'password is required' || err.response.data.message === 'wrong password'){
                    msg = 'Senha incorreta'
                }else if(err.response.data.message === 'email is required' || err.response.data.message === 'user not found'){
                    msg = 'Email não encontrado'
                }else{
                    msg = 'Algo deu errado, tente novamente'
                }
                notify(msg)
            })
    }

    function handleOnChange(e){
        setUser({...user, [e.target.name] : e.target.value})
    }

    return(
        <Styled.LoginContainer>
            <Logo/>
            <h4>Entre com a sua conta</h4>
            <form onSubmit={handleOnSubmit}>
                <Input type='email' placeholder='Email' name='email' onChange={handleOnChange}/>
                <Input type='password'  placeholder='Senha' name='password' onChange={handleOnChange}/>
                <SubmitButton text='Enviar' onClick={handleOnSubmit}/>
            </form>
            <p>Não possui uma conta? <Link to=''><span>Registrar</span></Link></p>
        </Styled.LoginContainer>
    )
}   