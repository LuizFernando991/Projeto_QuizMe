import styled from 'styled-components'

export const ProfilePageContainer = styled.div`
    
    width: 100%;
    height: 100vh;
    background: rgb(142,205,255);
    background: linear-gradient(167deg, rgba(142,205,255,0) 29%, rgba(56,167,255,0.4069210122699386) 64%, rgba(11,83,156,0.6110819327731092) 100%);
    display: flex;
    justify-content: center;
    align-items: center;

`
export const ProfileContainer = styled.div` 
    
    width: 35%;
    height: 700px;
    margin-top: -80px;
    background-color: #fff;
    border-radius: 30px;
    box-shadow: 0px 3px 5px 1px rgba(0,0,0,0.1);
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;

`

export const ImageContainer = styled.img`
    
    width: 120px;
    height: 120px;
    border-radius: 99999px;
    margin-top: 20px;
    opacity: 0.8;
    
`

export const UserInformation = styled.div`
    
    margin-top: 8px;
    width: 100%;
    border-bottom: 1px solid #f1f1f1;

    p{
        color: #62AED5;
        text-align: center;
        font-size: 0.8em;
        margin-bottom: 10px;
    }
    h3{
        text-align: center;
        text-transform: capitalize;
        margin-top: 3px;
        margin-bottom: 3px;
        background: linear-gradient(rgba(96,102,208,1) 0%, rgba(56,167,255,1) 100%);
        background-clip: text;
        -webkit-background-clip: text;
        color: transparent;
    }
   
`

export const ProgressBarContainer = styled.div`

    width: 100%;
    height: 250px;
    display: flex;
    justify-content: space-between;
    margin-top: 20px;

`

export const CircularProgressBarContainer = styled.div`

    width: 50%;
    display: flex;

`

export const TotalAnswersContainer = styled.div`

    width: 50%;
    height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;



`

export const TitleProgressBarContainer = styled.div` 

    width: 100%;
    display: flex;
    justify-content: space-around;
    margin-top: -20px;
    padding-bottom: 40px;
    border-bottom: 1px solid #f1f1f1;

    h2:not(:last-child){
        padding-left: 25px;
    }

`

export const H2 = styled.h2` 
        
        padding: 10px;
        font-family: 'Beau Rivage', cursive;
        font-size: 1.4em;
        background: linear-gradient(rgba(96,102,208,1) 0%, rgba(56,167,255,1) 100%);
        background-clip: text;
        -webkit-background-clip: text;
        color: transparent;


`

export const LinksContainer = styled.div`

    
    margin-top: auto;
    margin-bottom: 40px;

    button{
        font-family: 'Beau Rivage', cursive;
        color: red;
        background: none;
        border: none;
        font-size: 1.2em;
        font-weight: bold;
        margin-left: 20px;
        transform: scale(0.9);
        cursor: pointer;
        transition: all ease-in 0.2s;

        &:hover{
            transform: scale(1);
        }
    }

    a{
        text-decoration: none;
        font-family: 'Beau Rivage', cursive;
        background: linear-gradient(158deg, rgba(96,102,208,1) 0%, rgba(56,167,255,1) 100%);
        background-clip: text;
        -webkit-background-clip: text;
        color: transparent;
        font-size: 1.2em;
        font-weight: bold;
        transition: all ease-in 0.2s;

        &:hover{
            opacity: 0.9;
        }

    }


`