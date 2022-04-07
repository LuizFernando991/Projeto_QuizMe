import styled from 'styled-components'

export const SubmitButton = styled.button` 

    cursor: pointer;
    width: 100%;
    background: rgb(96,102,208);
    background: linear-gradient(158deg, rgba(96,102,208,1) 0%, rgba(56,167,255,1) 100%);
    height: 40px;
    border: none;
    border-radius: 10px;
    color: #fff;
    font-weight: bold;
    font-size: 1.2em;
    opacity: 0.8;
    
    &:hover{
        opacity: 1;
        background: linear-gradient(158deg, rgba(56,167,255,1) 0%, rgba(96,102,208,1) 100%);
    }
    transition: all ease 0.8s;
    
`