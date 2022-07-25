import { InnerLayout } from "../Styles/Layouts";
import styled from "styled-components";
import Title from "./Title";
import Experience from "./Experience";
import ResumeItem from "./ResumeItem";
import { WorkOutline, SchoolOutlined } from "@mui/icons-material";

function Resume() {
    const learn = <WorkOutline />;
    const school = <SchoolOutlined />;

    return (    
        <ResumeStyled>

            {/* LEARNING SECTION!!! */}
            <Title title={"Resume"} span={"Resume"} />
            <InnerLayout>
                <article data-aos="fade-up">
                    <div className="experience" >
                        <Experience
                            icon={learn}
                            title={"Learning Experience"}
                        />
                    </div>
                    <div className="resume-content">
                        <ResumeItem
                            year={"March 2021"}
                            title={"Intro to HTML"}
                            subTitle={"FreeCodeCamp"}
                            text={"HTML stands for HyperText Markup Language. It is used on the frontend and gives the structure to the webpage which you can style using CSS and make interactive using JavaScript."}
                        />
                        <ResumeItem
                            year={"May 2021"}
                            title={"Basic CSS"}
                            subTitle={"W3 Schools"}
                            text={"CSS or Cascading Style Sheets is the language used to style the frontend of any website. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript."}
                        />
                        <ResumeItem
                            year={"July 2021"}
                            title={"JavaScript Concepts"}
                            subTitle={"Codecademy"}
                            text={`JavaScript allows you to add interactivity to your pages. Common examples that you may have seen on the websites are sliders, click interactions, popups and so on. Apart from being used on the frontend in browsers, there is Node.js which is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.`}
                        />
                        <ResumeItem
                            year={"Febuary 2022"}
                            title={"Version Control Systems"}
                            subTitle={"GitHub"}
                            text={`Version control/source control systems allow developers to track and control changes to code over time. These services often include the ability to make atomic revisions to code, branch/fork off of specific points, and to compare versions of code. They are useful in determining the who, what, when, and why code changes were made.`}
                        />
                        <ResumeItem
                            year={"March 2022"}
                            title={"NoSQL databases"}
                            subTitle={"MongoDB"}
                            text={`NoSQL databases offer data storage and retrieval that is modelled differently to "traditional" relational databases. NoSQL databases typically focus more on horizontal scaling, eventual consistency, speed and flexibility and is used commonly for big data and real-time streaming applications.`}
                        />
                        <ResumeItem
                            year={"May 2022"}
                            title={"REST APIs"}
                            subTitle={"Traversy Media"}
                            text={`REST, or REpresentational State Transfer, is an architectural style for providing standards between computer systems on the web, making it easier for systems to communicate with each other.`}
                        />
                        <ResumeItem
                            year={"June 2022"}
                            title={"Web Securities"}
                            subTitle={"MDN Web Docs"}
                            text={`Web security refers to the protective measures taken by the developers to protect the web applications from threats that could affect the business.`}
                        />
                        <ResumeItem
                            year={"Present"}
                            title={"Testing & Deployment"}
                            subTitle={"Stack Overflow"}
                            text={`A key to building software that meets requirements without defects is testing. Software testing helps developers know they are building the right software. Finally, the deployment basically means the uploading of a website online.`}
                        />
                    </div>
                </article>
                {/* END OF LEARNING SECTION!!! */}

                {/* EDUCATION SECTION!!! */}
                <article data-aos="fade-up">
                    <div className="experience u-xp-title-margin" >
                        <Experience
                            icon={school}
                            title={"Educational Background"}
                        />
                    </div>
                    <div className="resume-content">
                        <ResumeItem
                            year={"2014 - 2018"}
                            title={"University Education"}
                            subTitle={"University of Nigeria Nsukka"}
                            text={"I graduated with a B.Sc in both Human and Animal Psychology in a four year course"}
                        />
                        <ResumeItem
                            year={"2006 - 2011"}
                            title={"Secondary Education"}
                            subTitle={"Command Day Secondary School, Enugu"}
                            text={"Passed my West African Examination Council with 5 Distinctions in Biology, Commerce, English, Economics, & Government subjects; and 4 Credits in Maths, Agricultural Science, Igbo Language, & Christian Religious Studies"}
                        />
                        <ResumeItem
                            year={"2000 - 2005"}
                            title={"Primary Education"}
                            subTitle={`King"s Kid Nursery & Primary School, Agbani RD, Enugu`}
                            text={"I obtained my First School Leaving Certificate, and also scored a high mark of 71 / 100 on my Common Entrance Examination"}
                        />
                    </div>
                </article>
                {/* END OF EDUCATION SECTION!!! */}

            </InnerLayout>
        </ResumeStyled>
    )
}

const ResumeStyled = styled.section`
    .experience {
        padding-bottom: 1rem;
    }
    .u-xp-title-margin {
        margin-top: 2rem;
    }
    .resume-content {
        border-left: 2px solid var(--border-color);
    }
`;

export default Resume;