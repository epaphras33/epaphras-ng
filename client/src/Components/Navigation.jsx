import { NavLink } from "react-router-dom";
import styled from "styled-components";

import avatar from "../Images/avatar.png";

function Navigation() {
    
    return (
        <NavigationStyled>
            <div className="avatar">
                <img src={avatar} alt="ify epaphras" />
            </div>

            {/* NAV-LINKS SECTION!!! */}
            <ul className="nav-items" data-aos="fade-up">
                <li className="nav-item">
                    <NavLink to="/" exact activeClassName="active-class">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/about" exact activeClassName="active-class">About</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/resume" exact activeClassName="active-class">Resume</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/portfolio" exact activeClassName="active-class">Portfolios</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/blog" exact activeClassName="active-class">Blogs</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/contact" exact activeClassName="active-class">Contact</NavLink>
                </li>
            </ul>
            {/* END OF NAV-LINKS SECTION!!! */}

            {/* COPYRIGHT SECTION!!! */}
            <footer className="footer">
                <small>
                    @{new Date().getFullYear()} Developed by <br /> Ify Epaphras NG
                </small>
            </footer>
            {/* END OF COPYRIGHT SECTION!!! */}

        </NavigationStyled>
    )
}

const NavigationStyled = styled.nav`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 100%;
    border-right: 1px solid var(--border-color);
    .avatar {
        width: 100%;
        border-bottom: 1px solid var(--border-color);
        text-align: center;
        padding: .5rem 0;
        img {
            width: 100%;
        }
    }
    .nav-items {
        width: 100%;
        text-align: center;
        .active-class {
            background-color: var(--primary-color);
            color: var(--white-color);
        }
        li {
            display: block;
            a {
                display: block;
                padding: .25rem 0;
                position: relative;
                z-index: 10;
                text-transform: uppercase;
                transition: all .4s ease-ease-in-out;
                font-weight: 300;
                letter-spacing: 1px;
                &:hover {
                    cursor: pointer;
                    color: var(--white-color);
                }
                &::before {
                    content: "";
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 0;
                    height: 50%;
                    background-color: var(--primary-color);
                    transition: All 0.4s cubic-bezier(1,-0.02,.25,.95);
                    z-index: 3;
                    opacity: 0.21;
                    z-index: -1;
                }
            }
            a:hover::before {
                width: 100%;
                height: 100%;
            }
        }
    }
    footer {
        border-top: 1px solid var(--border-color);
        width: 100%;
        small {
            padding: .5rem 0;
            font-size: 14px;
            display: block;
            text-align: center;
            @media screen and (max-width: 502px) {
                font-size: 12px;
            }
        }
    }
`;

export default Navigation;