import { useContext, useEffect } from 'react'
import { UserContext } from '../../context/UserContext'
import { Link, useNavigate } from 'react-router-dom'
import { CircularProgressBar } from '../../components/CircularProgressbar'
import { TotalAnswers } from '../../components/TotalAnswers'
import api from '../../helpers/api'
import notify from '../../helpers/notify'
import DefaultUserImage from '../../Images/default-user.jpg'
import * as Styled from './styles'

export function Profile(){

    const { authenticatedUser, setAuthenticatedUser, authenticated, setAuthenticated } =  useContext(UserContext)
    const navigate = useNavigate()

    useEffect(()=>{
        if(!authenticated){
            navigate('/auth/login')
        }
    }, [authenticated, navigate])

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
    
    function handleOnLogoutButtonClick(){
        localStorage.removeItem('token')
        setAuthenticatedUser('')
        setAuthenticated(false)
    }

    return(
        <Styled.ProfilePageContainer>
            <Styled.ProfileContainer>
                <Styled.ImageContainer src={authenticatedUser.image ? `${process.env.REACT_APP_API}/images/users/${authenticatedUser.image}` : DefaultUserImage} alt={authenticatedUser.name || 'image'} />
                <Styled.UserInformation>
                    <h3>{authenticatedUser.name?.trim()}</h3>
                    <p>{authenticatedUser.email?.trim()}</p>
                </Styled.UserInformation>
                <Styled.ProgressBarContainer>
                    <Styled.CircularProgressBarContainer>
                        <CircularProgressBar correctAnswers={authenticatedUser.qtd_correct_answers} wrongAnswers={authenticatedUser.qtd_wrong_answers}/>
                    </Styled.CircularProgressBarContainer>
                    <Styled.TotalAnswersContainer>
                        <TotalAnswers correctAnswers={authenticatedUser.qtd_correct_answers} wrongAnswers={authenticatedUser.qtd_wrong_answers}/>
                    </Styled.TotalAnswersContainer>
                </Styled.ProgressBarContainer>
                <Styled.TitleProgressBarContainer>
                    <Styled.H2>Taxa de acerto</Styled.H2>
                    <Styled.H2>Questões respondidas</Styled.H2>
                </Styled.TitleProgressBarContainer>
                <Styled.LinksContainer>
                    <Link to='/profile/edit'>Editar Perfil</Link>
                    <button onClick={handleOnLogoutButtonClick}>Sair</button>
                </Styled.LinksContainer>
            </Styled.ProfileContainer>
        </Styled.ProfilePageContainer>
    )

}

