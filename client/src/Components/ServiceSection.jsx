import { InnerLayout } from "../Styles/Layouts";
import styled from "styled-components";
import Title from "./Title";
import ServiceCard from "./ServiceCard";
import webHosting from "../Images/networking.svg";
import design from "../Images/design.svg";
import os from "../Images/os.svg";

function ServiceSection() {

    return (
        <InnerLayout>
            <ServiceSectionStyled>

                {/* SERVICE CARD SECTION!!! */}
                <Title title={"Services"} span={"Services"} />
                <article className="services" data-aos="fade-up">
                    
                    <ServiceCard
                        image={design}
                        title={"Web Design"}
                        paragragh={"My service includes building a responsive website such as a landing page, a crypto website, an e-commerce website, a banking platform, etc that works perfectly in all devices"}
                    />
                    <div className="mid-card">
                        <ServiceCard
                            image={webHosting}
                            title={"Web Hosting"}
                            paragragh={"I can deploy files, service them and maintain websites on a server. I can also write a good authentication and authorization thereby improving on the web securities"}
                        />
                    </div>
                    <ServiceCard
                        image={os}
                        title={"Operating System"}
                        paragragh={"I have the basic knowledge in computer operating systems especially in MS-Windows. Basically, I can run and repair any issue or trouble with your computer software"}
                    />
                </article>
                {/* END OF SERVICE CARD SECTION!!! */}

            </ServiceSectionStyled>
        </InnerLayout>
    )
}

const ServiceSectionStyled = styled.section`
    .services {
        margin-top: 2.5rem;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 1rem;
        @media screen and (max-width: 1000px) {
            flex-direction: column;
        }
        @media screen and (max-width: 950px) {
            grid-template-columns: repeat(2, 1fr);
        }
        @media screen and (max-width: 650px) {
            grid-template-columns: repeat(1, 1fr);
        }       
    }
`;

export default ServiceSection;