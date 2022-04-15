import styled from 'styled-components'


export const Nav = styled.nav`
    
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5em 2em;
    border-bottom: 1px solid rgba(56, 167, 255, 0.2);
    
    a{
        text-decoration: none;
    }

    a h1{
        text-align: left;
        font-size: 2.5em;
    }
`
export const ImgContainer = styled.div`

    width: 60px;
    height: 60px;
    border-radius: 9999px;
    

    img{
        max-width: 100%;
        
    }

`