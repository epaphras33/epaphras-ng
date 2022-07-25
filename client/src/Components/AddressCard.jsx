import styled from "styled-components";

function AddressCard({ icon, title, textOne, textTwo }) {
    
    return (
        <AddressCardStyled>
            <div className="container">
                <div aria-label="icon">{icon}</div>
                <h4>{title}</h4>
                <p>{textOne}</p>
                <p>{textTwo}</p>
            </div>
        </AddressCardStyled>
    )
}

const AddressCardStyled = styled.div`
    background-color: var(--background-dark-grey);
    border-left: 1px solid var(--border-color);
    border-top: 4px solid var(--border-color);
    border-right: 1px solid var(--border-color);
    border-bottom: 1px solid var(--border-color);
    transition: all .4s ease-in-out;
    &:hover {
        border-top: 4px solid var(--primary-color);
        transform: translateY(1.5px);
    }
    .container {
        padding: .9rem;
        h4 {
            color: var(--white-color);
            font-size: 21px;
            padding: .5rem 0;
            position: relative;
            @media screen and (max-width: 502px) {
                font-size: 18px;
            }
            &::after {
                content: "";
                width: 2rem;
                background-color: var(--border-color);
                position: absolute;
                height: 2px;
                left: 0;
                bottom: 0;
                border-radius: 10px;
            }
        }
        p {
            padding: .4rem 0;
            @media screen and (max-width: 502px) {
                font-size: 16px;
            }
        }
    }
`;

export default AddressCard;