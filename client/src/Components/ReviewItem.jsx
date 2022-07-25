import styled from "styled-components";

function ReviewItem({ text, author, work, icon }) {
    
    return (
        <ReviewItemStyled>
            <div className="quote">
                <p className="review">{text}</p>
                <span aria-label="quote icon">{icon}</span>
            </div>            
            <div className="testimonial">
                <p className="author">{author}</p>
                <small>{work}</small>
            </div>           
        </ReviewItemStyled>
    )
}

const ReviewItemStyled = styled.div`
    padding: 1rem .5rem;
    border-left:3px solid var(--border-color);
    background-color: var(--background-dark-grey);
    position: relative;
    width: 100%;
    &::after {
        content: "";
        position: absolute;
        left: 1rem;
        top: 100%;
        border-style: solid;
        border-color: var(--background-dark-grey) transparent transparent var(--background-dark-grey);
        border-width: .4rem;
    }
    .quote {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .review {
        font-style: italic;
        @media screen and (max-width: 502px) {
            font-size: 16px;
        }
    }
    .testimonial {
        display: flex;
        align-items: center;
        margin-top: .5rem;
        .author {
            margin-right: .5rem;
            color: var(--primary-color);
            text-transform: uppercase;
        }
    }
`;


export default ReviewItem;