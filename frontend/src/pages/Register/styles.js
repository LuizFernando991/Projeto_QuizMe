import styled from 'styled-components'

export const RegisterContainer = styled.div` 

    width: 400px;
    height: 600px;
    background-color: #fff;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    border-radius: 20px;
    box-shadow: 0 3px 5px 1px rgba(0,0,0,0.1);

    h1{
        margin-top: 20px;
    }

    h2{
        text-align: center;
        margin-top: 60px;
        font-family: 'Beau Rivage', cursive;
        font-size: 1.2em;
        color: #288FE0;
    }

    form{
        margin: 20px auto;
        width: 80%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    p{
        width: 80%;
        margin: 0 auto;
        font-family: 'Beau Rivage', cursive;
        font-size: 0.8em;
        color: #288FE0;
    }
    
    span{
        color: #38a7ff;
        font-weight: bold;
    }
    
    a{
        text-decoration: none;
    }

`

export const LogoContainer = styled.div` 

    width: 100%;
    border-bottom: 1px solid #38a7ff;
    padding-bottom: 20px;

`