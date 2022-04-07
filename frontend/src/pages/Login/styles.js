import styled from 'styled-components'



export const LoginContainer = styled.div` 

    width: 400px;
    height: 400px;
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
        text-align: center;
        font-family: 'Beau Rivage';
        font-size: 3.2em;
        color: #38a7ff;
        
    }
    h4{
        text-align: center;
        margin-top: 6px;
        font-family: 'Beau Rivage';
        font-size: 1.3em;
        color: #288FE0;
    }

    form{
        margin: 0 auto;
        height: 200px;
        width: 80%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    p{
        width: 80%;
        margin: 0 auto;
    }

    a{
        text-decoration: none;
        color: #288FE0;
    }

`