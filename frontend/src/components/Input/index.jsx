import * as Styled from './styles'

export function Input({ type, name, value, placeholder = '', onChange}){


    return(
        <Styled.Input>
            <input type={type} placeholder={placeholder} value={value} name={name} onChange={onChange}/>
        </Styled.Input>
    )
}   