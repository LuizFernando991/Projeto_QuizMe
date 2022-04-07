import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Input } from '../../components/Input'
import { SubmitButton } from '../../components/SubmitButton'
import * as Styled from './styles'


export function Login(){

    const [ user, setUser ] = useState({})
   
    async function handleOnSubmit(e){
        e.preventDefault()
    }

    function handleOnChange(e){
        setUser({...user, [e.target.name] : e.target.value})
    }

    return(
        <Styled.LoginContainer>
            <h1>QuizMe</h1>
            <h4>Entre com sua conta</h4>
            <form onSubmit={handleOnSubmit}>
                <Input type='email' placeholder='Email' name='email' onChange={handleOnChange}/>
                <Input type='password'  placeholder='Senha' name='password' onChange={handleOnChange}/>
                <SubmitButton text='Enviar' onClick={handleOnSubmit}/>
            </form>
            <p>Não possui uma conta? <Link to=''>Registrar</Link></p>
        </Styled.LoginContainer>
    )
}   