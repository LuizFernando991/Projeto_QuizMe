import { useContext, useEffect } from 'react'
import { UserContext } from '../../context/UserContext'
import { Link } from 'react-router-dom'
import { CircularProgressBar } from '../../components/CircularProgressbar'
import api from '../../helpers/api'
import notify from '../../helpers/notify'
import DefaultUserImage from '../../Images/default-user.jpg'
import * as Styled from './styles'

export function Profile(){

    const { authenticatedUser, setAuthenticatedUser, authenticated } =  useContext(UserContext)

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
        <Styled.ProfilePageContainer>
            <Styled.ProfileContainer>
                <Styled.ImageContainer src={DefaultUserImage} alt={authenticatedUser.name || 'image'} />
                <Styled.UserInformation>
                    <h3>{authenticatedUser.name?.trim()}</h3>
                    <p>{authenticatedUser.email?.trim()}</p>
                </Styled.UserInformation>
                <Styled.ProgressBarContainer>
                    <Styled.CircularProgressBarContainer>
                        <CircularProgressBar correctAnswers={authenticatedUser.qtd_correct_answers} wrongAnswers={authenticatedUser.qtd_wrong_answers}/>
                        <h2>Taxa de acerto</h2>
                    </Styled.CircularProgressBarContainer>
                </Styled.ProgressBarContainer>
            </Styled.ProfileContainer>
        </Styled.ProfilePageContainer>
    )

}