import styled from 'styled-components'

export const QuestionContainer = styled.div` 

    width: 40%;
    height: 70vh;
    position: absolute;
    top: 110px;
    bottom: 20px;
    left: 0;
    right: 0;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px;
    border-radius: 20px;
    color: #fff;
    font-family: 'Beau Rivage', cursive;
    background: linear-gradient(158deg, rgba(96,102,208,0.8) 0%, rgba(56,167,255,0.9) 100%);
    box-shadow: 0 3px 5px 1px rgba(0,0,0,0.3);

    h2{
        font-size: 26px;
    }


`

export const ContainerStartButton = styled.div`

    position: absolute;
    top: 110px;
    bottom: 20px;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

`

export const QuestionsButton = styled.button`

    width: 200px;
    height: 60px;
    margin-top: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-family: 'Roboto', sans-serif;
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 2.5px;
    font-weight: 600;
    color: #fff;
    background: linear-gradient(158deg, rgba(96,102,208,0.8) 0%, rgba(56,167,255,0.9) 100%);
    border: none;
    border-radius: 45px;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease 0s;
    cursor: pointer;
    outline: none;
    &:hover{
        background-color: #2EE59D;
        box-shadow: 0px 15px 20px rgba(56,167,255,0.3);
        color: #fff;
        transform: translateY(-7px);
    }
`

export const TextContainer = styled.div`

    background: rgb(11,83,156);
    background: linear-gradient(158deg, rgba(96,102,208,1) 0%, rgba(56,167,255,1) 100%);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    padding: 2px;


`

export const AnswerContainer = styled.div`
    
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 30px 0px 35px 0px;


`

export const RevealContainer = styled.div`

    width: 100%;
    height: 100%;
    background-color: transparent;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    position: absolute;
    z-index: 2;

    button{
        margin-bottom: 15px;
        border: 1px solid yellowgreen;
    }

    button:hover{
        color: yellow;
    }



`

