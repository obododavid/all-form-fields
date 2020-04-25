import styled from 'styled-components';


export const InputContainer = styled.div`
    position: relative;

    .input-field{

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
            color: blue;
        }

    }

    .error{
        border-color: #ff0000 !important;
    }

    .error + .input-label{
        color: #ff0000 !important;
    }

    .input-label{
        position: absolute;
        left: 12px;
        font-size: 12px;
        top: -11px;
        padding: 5px;
        background-color: #ffffff;
        color: black;
        opacity: 0;
        transform: translateY(-8px);
        transition: all 0.5s ease-in-out;

        ${({ focus }) => focus && 'opacity: 1; transform: translateY(0px);'}
    }

   


    .error-message{
        margin: 3px;
        color: #ff0000;
        font-weight: 400;
        display: flex;

        span{
            background-color: #ff0000;
            color: #ffffff;
            border-radius: 50%;
            width: 12px;
            height: 12px;
            display: inline-block;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            margin-right: 5px;
        }
    }
`
