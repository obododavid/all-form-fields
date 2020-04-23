import styled from 'styled-components';


export const InputContainer = styled.div`
    position: relative;

    .input-label{
        position: absolute;
        left: 12px;
        font-size: 12px;
        top: -11px;
        padding: 5px;
        background-color: #ffffff;
        color: blue;
        opacity: 0;
        transform: translateY(-8px);
        transition: all 0.5s ease-in-out;
    }
`

export const InputField = styled.input`
    border: 1px solid black;
    padding: 12px 24px;
    border-radius: 5px;
    font-size: 16px;
    outline: none;
    transition: all 0.5s ease-in-out;

    ::placeholder{
        opacity: 0.5;
    }

    &:focus{
        border-color: blue;
    }

    &:focus + .input-label{
        height: auto;
        opacity: 1;
        transform: translateY(0);
    }
`