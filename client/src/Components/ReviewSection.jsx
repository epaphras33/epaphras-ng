import { InnerLayout } from "../Styles/Layouts";
import styled from "styled-components";
import ReviewItem from "./ReviewItem";
import Title from "./Title";
import FormatQuoteRoundedIcon  from "@mui/icons-material/FormatQuoteRounded";

function ReviewSection() {
    const quote = <FormatQuoteRoundedIcon />;
    return (
        <ReviewSectionStyled>

            {/* REVIEW SECTION!!! */}
            <Title title={"Reviews"} span={"Reviews"} />
            <InnerLayout>
                <article className="reviews" data-aos="zoom-in">
                    <ReviewItem
                        text={"Though Ify is still in his learning phase, he has been a tremendous help in setting & connecting my company online. What a great guy!"}
                        icon={quote}
                        author={"Nkem"}
                        work={"First Choice Boutique Ltd"}
                    />                   
                    <ReviewItem
                        text={"His honesty, work ethic, self-discipline, understanding and proper organization is what got to me. Totally worth it"}
                        icon={quote}
                        author={"Rosa"}
                        work={"Mama African Dish Restuarant"}
                    />                   
                    <ReviewItem
                        text={"I was having an issue with my laptop not connecting online until my brother recommended me to Ify. I will forever be grateful cuz he did a pretty nice job"}
                        icon={quote}
                        author={"Haya"}
                        work={"Ace Drug Store"}
                    />                   
                    <ReviewItem
                        text={"As much as he is a student, he is a great teacher. He taught me the fundamentals of web programming, and gave me a valuable route to becoming an efficient programmer!"}
                        icon={quote}
                        author={"Toyin"}
                        work={"Bluenet Communications"}
                    />                   
                </article>
            </InnerLayout>
            {/* END OF REVIEW SECTION!!! */}

        </ReviewSectionStyled>
    )
}

const ReviewSectionStyled = styled.section`
    .reviews {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 1.5rem;
        width: 100%;
        @media screen and (max-width: 1000px) {
            grid-template-columns: repeat(1, 1fr);
        }
    }
`;

export default ReviewSection;