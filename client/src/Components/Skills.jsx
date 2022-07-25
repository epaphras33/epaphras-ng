import styled from "styled-components";
import { InnerLayout } from "../Styles/Layouts";
import Title from "../Components/Title";
import ProgressBar from "./ProgressBar";

function Skills() {
    return (
        <SkillStyled>

            {/* SKILLS SECTION!!! */}
            <Title title={"Skills"} span={"Skills"} />
            <InnerLayout>
                <article className="skills" data-aos="zoom-in">
                    <ProgressBar
                        title={"Web Design"}
                        width={"95%"}
                        text={"95%"}
                    />
                    <ProgressBar
                        title={"Computer Networking"}
                        width={"70%"}
                        text={"70%"}
                        />
                    <ProgressBar
                        title={"Cyber Security"}
                        width={"85%"}
                            text={"85%"}
                    />
                    <ProgressBar
                        title={"Information Technology"}
                        width={"90%"}
                        text={"90%"}
                    />
                    <ProgressBar
                        title={"Game Development"}
                        width={"80%"}
                        text={"80%"}
                    />
                    <ProgressBar
                        title={"Search Engine Optimization"}
                        width={"95%"}
                        text={"95%"}
                    />
                </article>
            </InnerLayout>
            {/* END OF SKILLS SECTION!!! */}

        </SkillStyled>
    )
}

const SkillStyled = styled.section`
    .skills {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-row-gap: 1rem;
        grid-column-gap: 2rem;
        @media screen and (max-width: 700px) {
            grid-template-columns: repeat(1, 1fr);
        }
    }
`;

export default Skills;