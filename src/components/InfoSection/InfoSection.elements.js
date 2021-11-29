import styled from 'styled-components';

export const InfoSec= styled.div`
    color: #fff;
    padding: 160px 0;
    background-color: ${({lightBg}) => (lightBg ? '#fff' : '#101522')}; 
`;

export const InfoRow = styled.div `
    display: flex;
    margin: 0 -15px -15px -15px;
    flex-wrap: wrap;
    align-items: center;
    flex-direction: ${({imgStart}) => (imgStart ? 'row-reverse' : 'row')};  
`;

export const InfoColumn = styled.div `
    margin-bottom: 15px;
    padding-right: 15px;
    padding-left: 15px;
    flex: 1;
    max-width: 50%;
    flex-basis: 50%;
`