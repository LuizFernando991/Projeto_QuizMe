import styled from 'styled-components'


export const Container = styled.div`

    width: 45%;
    border: 1px solid #f1f1f1;
    font-weight: bold;
    font-size: 20px;
    margin-top: 20px;
    padding: 10px;
    border-radius: 20px;
    background-color: #fff;
    color: #38a7ff;
    transform: scale(0.9);
    cursor: pointer;
    transition: all ease-in-out 0.2s;

    &:hover{
        transform: scale(1);
    }
    span{
        color: rgba(96,102,208, 0.9);
    }


`