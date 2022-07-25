import styled from "styled-components";
import { GitHub, LanguageOutlined } from "@mui/icons-material";


function Menu({ menuItem }) {
    const github = <GitHub />;
    const web = <LanguageOutlined />;

    return (
        <MenuItemStyled>
            
            {/* MAPPED BLOG SECTION!!! */}
            {
                menuItem.map(item => {
                    const { id, image, link1, link2, title, text } = item;
                    return (
                        <article key={id} className="grid-item" data-aos="fade-up">
                            <div className="portfolio-content">
                                <div className="portfolio-image">
                                    <img src={image} alt={title} />
                                    <ul>
                                        <li>
                                            <a href={link1} target="_blank" rel="noreferrer" aria-label="open source on github">{github}</a>
                                        </li>
                                        <li>
                                            <a href={link2} target="_blank" rel="noreferrer" aria-label="view on the web">{web}</a>
                                        </li>
                                    </ul>
                                </div>
                                <h6>{title}</h6>
                                <p>{text}</p>
                            </div>
                        </article>
                    )
                })
            }
            {/* END OF MAPPED BLOG SECTION!!! */}

        </MenuItemStyled>
    )
}

const MenuItemStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;
    @media screen and (max-width: 920px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width: 670px) {
        grid-template-columns: repeat(1, 1fr);
    }
    .grid-item {
        .portfolio-content {
            display: block;
            position: relative;
            overflow: hidden;
            h6 {
                font-size: inherit;
                color: var(--white-color);
                padding-bottom: .3rem;
                @media screen and (max-width: 502px) {
                    font-size: 18px;
                }
            }
            p {
                font-size: inherit;
                @media screen and (max-width: 502px) {
                    font-size: 16px;
                }
            }
            img {
                width: 100%;
                height: 30vh;
                object-fit: cover;
            }
            ul {
                position: absolute;
                left: 50%;
                top: 30%;
                transform: translateY(-600px);
                transition: all .4s ease-in-out;
                opacity: 0;
                li {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    background-color: var(--border-color);
                    padding: .7rem;
                    border-radius: 50%;
                    margin: 0 .3rem;
                    width: 3rem;
                    height: 3rem;
                    transition: all .4s ease-in-out;
                    &:hover {
                        background-color: var(--primary-color);
                    }
                    a {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        transition: all .4s ease-in-out;
                    }
                    
                }
            }
            .portfolio-image {
                &::before {
                    content: "";
                    position: absolute;
                    left: 2%;
                    top: 2%;
                    height: 0;
                    width: 0;
                    transition: all .4s ease-in-out;
                }
            }
            .portfolio-image:hover {
                ul {
                    transform: translateY(0);
                    transform: translate(-50%, -50%);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    transition: all .4s ease-in-out;
                    opacity: 1;
                    li {
                        transition: all .4s ease-in-out;
                        &:hover {
                            background-color: var(--primary-color);
                        }
                        a {
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            transition: all .4s ease-in-out;
                        }
                        
                    }
                    li:hover {
                        svg {
                            color: var(--white-color);
                        }
                    }
                    svg {
                        font-size: 1.5rem;
                    }
                }
                &::before {
                    height: calc(100% - 45%);
                    width: calc(100% - 4%);
                    background-color: var(--white-color);
                    opacity: 0.6;
                    border-radius: 15px;
                    transform-origin: left;
                    transition: all .4s ease-in-out;
                }
            }
        }
    }
`;

export default Menu;