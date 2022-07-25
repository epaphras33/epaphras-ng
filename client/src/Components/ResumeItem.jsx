import styled from "styled-components";

function ResumeItem({ year, title, subTitle, text }) {
    
    return (
        <ResumeItemStyled>
            <div className="left-content">
                <p>{year}</p>
            </div>
            <div className="right-content">
                <h5>{title}</h5>
                <h6>{subTitle}</h6>
                <p>{text}</p>
            </div>
        </ResumeItemStyled>
    )
}

const ResumeItemStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    @media screen and (max-width: 502px) {
        p {
            font-size: 16px;
        }
    }
    &:not(:last-child) {
        padding-bottom: 1.5rem;
    }
    .left-content {
        width: 50%;
        padding-left: 20px;
        position: relative;
        &::before {
            content: "";
            position: absolute;
            left: -10px;
            top: 2px;
            height: 15px;
            width: 15px;
            border-radius: 50%;
            border: 2px solid var(--border-color);
            background-color: var(--background-dark-color);
        }
        @media screen and (max-width: 421px) {
            .left-content  {
                width: 10%;
            }
        }
        p {
            display: inline-block;
        }
    }
    .right-content {
        padding-left: 1rem;
        position: relative;
        &::before {
            content: "";
            position: absolute;
            left: 0;
            top: 17px;
            width: 1.5rem;
            height: 2px;
            background-color: var(--primary-color);
        }
        h5 {
            color: var(--primary-color);
            font-size: 24px;
            padding-bottom: .3rem;
            @media screen and (max-width: 502px) {
                font-size: 18px;
            }
        }
        h6 {
            padding-bottom: .3rem;
            font-size: 18px;
            @media screen and (max-width: 502px) {
                font-size: 16px;
            }
        }
    }
`;

export default ResumeItem;