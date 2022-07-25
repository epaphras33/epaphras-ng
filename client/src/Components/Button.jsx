import styled from "styled-components";

function Button({ filter, buttons }) {
    return (

        // MAPPED ALL THE BUTTONS!!!
        <ButtonsStyled data-aos="zoom-in">
            {
                buttons.map((button, index) => {
                    return (
                        <ButtonStyled key={index} onClick={() => filter(button)}>
                            {button}
                        </ButtonStyled>
                    )
                })
            }
        </ButtonsStyled>
    )
}

const ButtonsStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    margin: 1.2rem auto;
`;

const ButtonStyled = styled.button`
    outline: none;
    border: none;
    background-color: var(--background-light-color-2);
    padding: .2rem 1rem;
    font-size: 18px;
    color: var(--white-color);
    cursor: pointer;
    transition: all .4s ease-in-out;
    margin-bottom: .5rem;
    @media screen and (max-width: 502px) {
        font-size: 16px;
    }
    &:active, &:focus {
        background-color: var(--primary-color);
    }
    &:hover {
        background-color: var(--primary-color);
    }
    &:not(:last-child) {
        margin-right: .5rem;
    }
`;

export default Button;