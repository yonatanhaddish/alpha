import styled from 'styled-components';

export const SignupContainer= styled.div`
    background-color: #101522;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export  const FormWrapper= styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: solid 1px #0467fb;
    width: 300px;
    height: 250px;
`;

export const Form= styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 10px 20px;
    width: 100%;

    @media screen and (max-width: 820px) {
        flex-direction: column;
        width: 100%;
    }
`;

export const FormInput= styled.input`
    padding: 10px 20px;
    border-radius: 2px;
    margin: 0 0 10px 0;
    font-size: 16px;
    box-shadow: none;
    
    @media screen and (max-width: 820px) {
        width: 100%;
        margin: 0 0 16px 0;
    }
`;