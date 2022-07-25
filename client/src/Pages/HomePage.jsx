import styled from "styled-components";
import Particle from "../Components/Particle";

import { Facebook, GitHub, Twitter } from "@mui/icons-material";

function HomePage() {
    const facebook = <Facebook />;
    const github = <GitHub />;
    const twitter = <Twitter />;

    return (
        <HomePageStyled>
            <section className="particle-container">
                <Particle />
            </section>

            {/* WELCOME TEXT SECTION!!! */}
            <section className="typography">
                <article>
                    <h1>Hey, am <span>Ify Epaphras</span></h1>
                    <p className="welcome-text" >
                        Welcome! <br />
                        This is an interactive portfolio to visualize the tools and skills I've collected so far. As you proceed on the timeline, you will see how my experiences are built up.
                    </p>

                    {/* ICONS!!! */}
                    <div className="icons" >
                        <a
                            href="https://web.facebook.com/ify.epaphras"
                            className="icon i-facebook"
                            aria-label="facebook icon"
                            target="_blank"
                            rel="noreferrer"
                        >
                            {facebook}
                        </a>
                        <a
                            href="https://github.com/epaphras33"
                            className="icon i-github"
                            aria-label="github icon"
                            target="_blank"
                            rel="noreferrer"
                        >
                            {github}
                        </a>
                        <a
                            href="https://twitter.com/IfyEpaphras"
                            className="icon i-twitter"
                            aria-label="twitter icon"
                            target="_blank"
                            rel="noreferrer"
                        >
                            {twitter}
                        </a>
                    </div>
                </article>
            </section>
            {/* END OF WELCOME TEXT SECTION!!! */}

        </HomePageStyled>
    )
}

const HomePageStyled = styled.header`
    width: 100%;
    height: 100vh;
    position: relative;
    h1 {
        font-size: 35px;
        color: var(--white-color);
        span {
            font-size: 35px;
        }
        @media screen and (max-width: 502px) {
            h1 {
                font-size: 24px;
            }
        }
    }
    .particle-container {
        position: absolute;
        top: 0;
        left: 0;
    }
    .typography {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        width: 80%;
        .welcome-text {
            margin-top: 1rem;
            font-size: inherit;
            @media screen and (max-width: 502px) {
                font-size: 16px;
            }
        }
        .icons {
            display: flex;
            justify-content: center;
            margin-top: 1rem;
            .icon {
                border: 2px solid var(--border-color);
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                transition: all .4s ease-in-out;
                cursor: pointer;
                &:hover {
                    border: 2px solid var(--primary-color);
                    color: var(--primary-color);
                }
                &:not(:last-child) {
                    margin-right: 1rem;                   
                }
                svg {
                    margin: .5rem;
                }
            }           
            .i-facebook {
                &:hover {
                    border: 2px solid #4267B2;
                    color: #4267B2;
                }
            }
            .i-github {
                &:hover {
                    border: 2px solid #6e5494;
                    color: #6e5494;
                }
            }
            .i-twitter {
                &:hover {
                    border: 2px solid #00acee;
                    color: #00acee;
                }
            }
        }
    }
`;

export default HomePage;