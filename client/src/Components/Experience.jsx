import styled from "styled-components";

function Experience({icon, title}) {
    
    return (
        <ExperienceStyled>
            <p aria-label="icon">{icon}</p>
            <h3>{title}</h3>
        </ExperienceStyled>
    )
}

const ExperienceStyled = styled.div`
    display: flex;
    align-items: center;
    p {
        padding-right: .5rem;
        svg {
            font-size: 4rem;
        }
    }
    h3 {
        color: var(--white-color);
        font-size: 24px;
        @media screen and (max-width: 502px) {
            font-size: 18px;
        }
    }
`;

export default Experience;