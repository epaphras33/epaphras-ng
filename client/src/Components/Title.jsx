import styled from "styled-components";

function Title({ title, span }) {
    
    return (
        <TitleStyled>
            <h2>
                {title} <span>{span}</span>
            </h2>
        </TitleStyled>
    )
}

const TitleStyled = styled.div`
    position: relative;
    h2 {
        color: var(--white-color);
        font-size: 30px;
        font-weight: 300;
        text-transform: uppercase;
        position: relative;
        padding-bottom: .4rem;
        @media screen and (max-width: 620px) {
            font-size: 21px;
        }
        @media screen and (max-width: 370px) {
            font-size: 18px;
        }
        &::before {
            content: "";
            position: absolute;
            bottom: 0;
            width: 3rem;
            height: .15rem;
            background-color: var(--background-light-color-2);
            border-radius: 15px;
            left: 0;
        }
        &::after {
            content: "";
            position: absolute;
            bottom: 0;
            width: 1.5rem;
            height: .15rem;
            background-color: var(--primary-color);
            border-radius: 15px;
            left: 0;
        }
        span {
            font-weight: 500;
            color: var(--title-span-color);
            font-size: 30px;
            position: absolute;
            left: 0;
            top: 55%;
            z-index: -1;
            @media screen and (max-width: 620px) {
                font-size: 24px;
            }
            @media screen and (max-width: 496px) {
                font-size: 21px;
            }
            @media screen and (max-width: 370px) {
                font-size: 18px;
            }
        }
    }
`;

export default Title;