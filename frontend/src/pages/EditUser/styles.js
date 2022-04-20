import styled from 'styled-components'


export const EditUserPageContainer = styled.div`
    
    width: 100%;
    height: 100vh;
    background: rgb(142,205,255);
    background: linear-gradient(167deg, rgba(142,205,255,0) 29%, rgba(56,167,255,0.4069210122699386) 64%, rgba(11,83,156,0.6110819327731092) 100%);
    display: flex;
    justify-content: center;
    align-items: center;

`

export const EditProfileContainer = styled.div` 
    
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

export const ImageContainer = styled.div`
    
    width: 100%;
    margin-top: 20px;
    border-bottom: 1px solid #f1f1f1;
    display: flex;
    align-items: center;
    justify-content: center;

    div{
        width: 120px;
        height: 120px;
        border-radius: 9999px;
        margin-bottom: 20px;
        opacity: 1;
        position: relative;
    }

    div img{
        width: 120px;
        height: 120px;
        max-width: 120px;
        max-height: 120px;
    }

    input{
        display: none;
    }
    
    
`

export const LabelImageInput = styled.label`

    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 120px;
    height: 120px;
    border-radius: 9999px;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    font-weight: bold;
    font-size: 15px;
    color: #fff;
    transform: scale(0.9);
    transition: all ease-in 0.1s;
    cursor: pointer;
    background-color: rgba(241, 241, 241, 0.6);
    opacity: 0;

    &:hover{
        transform: scale(1);
        color: #696969;
        opacity: 1;
    }
`

export const FormContainer = styled.div`

    margin-top: 80px;
    border-bottom: 1px solid #f1f1f1;
    padding-bottom: 50px;

    input{
        border-color: rgba(56,167,255,1);
    }


`

export const TextContainer = styled.div`

    background: rgb(11,83,156);
    background: linear-gradient(158deg, rgba(56,167,255,1) 0%, rgba(96,102,208,1) 70%, rgba(56,167,255,1) 100%);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    padding: 2px;
    margin-bottom: 20px;


`

export const ButtonContainer = styled.form`

    width: 200px;
    margin-top: 40px;
    transform: scale(0.95);
    transition: all ease-in-out 0.3s;

    &:hover{
        transform: scale(1);
    }

`