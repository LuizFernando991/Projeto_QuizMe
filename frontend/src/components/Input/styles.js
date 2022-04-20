import styled from 'styled-components'

export const Input = styled.div`
    
    margin-bottom: 10px;
    width: 100%;
    
    input{
        color: rgba(96,102,208,1);
        font-weight: bold;
        width: 100%;
        padding: 0.7em;
        border: 3px solid #38a7ff;
        border-radius: 5px;
        text-align: center;
    }
    input::placeholder{
        color: #38a7ff;
        font-weight: bold;
        opacity: 0.6;
    }
    input:focus{
        outline: none;
    }
`