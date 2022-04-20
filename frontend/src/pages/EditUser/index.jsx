import { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../context/UserContext'
import api from '../../helpers/api'
import notify from '../../helpers/notify'
import DefaultUserImage from '../../Images/default-user.jpg'
import { Input } from '../../components/Input'
import { SubmitButton } from '../../components/SubmitButton'
import * as Styled from './styles'

export function EditUser(){

    const { authenticatedUser, setAuthenticatedUser, authenticated  } = useContext(UserContext)
    
    const [ user, setUser ] = useState({})
    const [ imagePreview, setImagePreview ] = useState('')
    const navigate = useNavigate()

    useEffect(()=>{
        if(!authenticated){
            navigate('/')
        }
    }, [authenticated, navigate])

    useEffect(()=>{
        setUser({ ...authenticatedUser})
    }, [authenticatedUser])

    function handleOnInputChange(e){
        setUser({ ...user, [e.target.name] : e.target.value})
    }

    function handleOnFileChange(e){
        setImagePreview(e.target.files[0])
        setUser({...user, [e.target.name] : e.target.files[0]})
    }

    async function handleOnSubmit(e){
        e.preventDefault()
        
        let formData = new FormData()

        Object.keys(user).forEach((key)=>
            formData.append(key, user[key])
        )

        await api.patch('/user/updateUser', formData, {
            headers: {
                Authorization : `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
                'Content-Type' : 'multipart/form-data'
            }
        }).then((res)=>{
            console.log(res.data.user)
        }).catch((err)=>{
            notify('Algo deu errado!')
        })



    }


    return(
        <Styled.EditUserPageContainer>
            <Styled.EditProfileContainer>
                <Styled.ImageContainer>
                    <div>
                        <img src={imagePreview ? URL.createObjectURL(imagePreview) : DefaultUserImage} alt="Profile" />
                        <Styled.LabelImageInput htmlFor='image'>Mudar imagem</Styled.LabelImageInput>
                        <input onChange={(e)=>handleOnFileChange(e)} name='image' id='image' type="file" />
                    </div>
                </Styled.ImageContainer>
                <Styled.FormContainer>
                    <Styled.TextContainer><h1>Atualize seus dados</h1></Styled.TextContainer>
                    <Input type={'text'} name='name' placeholder={'Nome'} value={user.name || ''} onChange={handleOnInputChange} />
                    <Input type={'text'} name='email' placeholder={'E-mail'} value={user.email || ''} onChange={handleOnInputChange}/>
                    <Input type={'password'} name='password' placeholder={'Nova senha'} value={user.password || ''} onChange={handleOnInputChange}/>
                    <Input type={'password'} name='confirmPassword' placeholder={'Confirmar senha'} value={user.confirmPassword || ''} onChange={(e)=>handleOnInputChange(e)}/>
                </Styled.FormContainer>
                <Styled.ButtonContainer onSubmit={(e)=>handleOnSubmit(e)}>
                    <SubmitButton text={'Enviar'}/>
                </Styled.ButtonContainer>
            </Styled.EditProfileContainer>
        </Styled.EditUserPageContainer>
    )
}