import styled from 'styled-components'


export const Container = styled.div`

    width: 45%;
    font-weight: bold;
    font-size: 20px;
    margin-top: 20px;
    padding: 10px;
    border-radius: 20px;
    background-color: #fff;
    color: #38a7ff;
    cursor: pointer;
    transition: all ease-in-out 0.2s;
    border: ${({revealCorrectAnswer, isCorrectAnswer, isWrongAnswer})=>{
        if(revealCorrectAnswer){
            if(isCorrectAnswer){
                return '2px solid green'
            }else if(isWrongAnswer){
                return '2px solid red'
            }else{
                return '2px solid #f1f1f1'
            }
            
        }else{
            return '2px solid #f1f1f1'
        }
    }};
    transform: ${({isSelected})=>
        isSelected ? 'scale(1.0)' : 'scale(0.9)'
    };


    &:hover{
        transform: scale(1);
    }
    span{
        color: rgba(96,102,208, 0.9);
    }


    


`