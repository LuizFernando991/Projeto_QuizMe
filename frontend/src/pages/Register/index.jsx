import { useState, useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import api from '../../helpers/api'
import { motion } from 'framer-motion'
import notify from '../../helpers/notify'
import { UserContext } from '../../context/UserContext'
import { Logo } from '../../components/Logo'
import { SubmitButton } from '../../components/SubmitButton'
import { Input } from '../../components/Input'
import * as Styled from './styles'



export function Register(){

    const [ user, setUser ] = useState({}) 
    const { authenticated, setAuthenticated } = useContext(UserContext)
    const navigate = useNavigate()

    useEffect(()=>{
        if(authenticated){
            navigate('/')
        }
    }, [authenticated, navigate])

    function handleOnChange(e){
        setUser({...user, [e.target.name] : e.target.value})
    }

    function handleOnSubmit(e){
        e.preventDefault()
        api.post('/user/register', user)
            .then((data)=>{
                localStorage.setItem('token', JSON.stringify(data.data.token))
                setAuthenticated(true)
            })
            .catch((err)=>{
                let msg
                if(err.response){
                    switch (err.response.data.message) {
                        case 'name is required':
                            msg = 'O nome é obrigatório'
                            break;
                        case 'email is required':
                            msg = 'O email é obrigatório'
                            break;
                        case 'password is required':
                            msg = 'A senha é obrigatório'
                            break;
                        case 'confirmPassword is required':
                            msg = 'A confirmação de senha é obrigatória'
                            break;
                        case 'password must match with confirmPassword':
                            msg = 'As senhas devem ser iguais'
                            break;
                        default:
                            msg = 'Algo deu errado, tente novamente.'
                            break;
                    }
                }else{
                    msg = 'Algo deu errado, tente novamente.'
                }
                notify(msg)
            })
    }

    return(
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 0.8}}
        >
        <Styled.RegisterContainer>
            <Styled.LogoContainer>
                <Logo />
            </Styled.LogoContainer>
            <h2>Cadastrar</h2>
            <form onSubmit={handleOnSubmit}>
                <Input type='text' name='name' placeholder='Nome' onChange={handleOnChange}/>
                <Input type='email' name='email' placeholder='Email' onChange={handleOnChange}/>
                <Input type='password' name='password' placeholder='Senha' onChange={handleOnChange}/>
                <Input type='password' name='confirmPassword' placeholder='Confirme a senha' onChange={handleOnChange}/>
                <SubmitButton text='Cadastrar' />
            </form>
            <p>Já possui uma conta? <Link to='/auth/login'><span>Entrar</span></Link></p>
        </Styled.RegisterContainer>
        </motion.div>
    )
}