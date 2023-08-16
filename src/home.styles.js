import { styled, css } from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background: url("https://res.cloudinary.com/dxkiqjvlp/image/upload/v1689721778/Eccomerce/32027_zshahq.jpg");
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    @media (max-width: 480px) {
        height: auto;
    }
    `

export const GeneralTitle = styled.h1`
    font-size: 60px;
    font-weight: 700;

    @media (max-width: 400px) {
        font-size: 45px;
    }
    `

export const ContainerWeather = styled.div`
    width: 480px;
    border: 2px solid white;
    padding: 18px;
    border-radius: 30px;
    margin: 15px auto;
    text-align: center;
    background: linear-gradient(135deg, rgba(3,28,147,1) 0%, rgba(2,16,82,1) 100%);

    @media (max-width: 530px) {
        width: auto;
    }

    @media (max-width: 400px) {
        margin: 0;
        padding: 10px;
        border-radius: 0;
    }
    `

export const ContainerSearch = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    `

export const InputStyled = styled.input`
    border: none;
    outline: none;
    padding: 12px 25px;
    font-size: 22px;
    border-radius: 30px;
    color: black;
    margin-right: 12px;
    flex: 1;
    background: #f3f1f1;

    @media (max-width: 530px) {
        font-size: 18px;
        padding: 8px 16px;
    }

    ${props =>
    props.error &&
    css`
        border: 2px solid red;
    `}
    `

export const ButtonStyled = styled.button`
    border: 1px solid white;
    outline: none;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    cursor: pointer;
    background: #2c2c2c;

    @media (max-width: 530px) {
        width: 35px;
        height: 35px;
    }

    &:hover {
        background: black;
    }
    `

export const ResultsContainer = styled.div`
    margin: 0 auto;
    `

export const TextCity = styled.h2`
    font-size: 50px;
    font-weight: 400;
    `

export const TextCountry = styled.h3`
    font-size: 22px;
    `

export const TextTemp = styled.h1`
    font-size: 80px;
    font-weight: 500;
    `

export const ContainerDetails = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px;
    margin-top: 40px;

    @media (max-width: 480px) {
        flex-direction: column;
    }
    `

export const ColDetails = styled.div`
    display: flex;
    align-items: center;
    `

export const TextDetails = styled.p`
    font-size: 25px;
    font-weight: 400;
`

export const FooterText = styled.p`
    font-size: 18px;
    opacity: 0.7;
`

export const ContainerFooter = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`

export const ContainerIcons = styled.footer`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
`

export const ErrorMessage = styled.p`
    color: red;
    text-align: left;
    margin: 6px;
    font-size: 18px;
    font-weight: 500;
    `