import styled from "styled-components";
import Navigation from "./Navigation";

function SideBar({ navToggle }) {
    
    return (
        <SideBarStyled className={`${navToggle ? "nav-toggle" : ""}`}>
            <Navigation />
        </SideBarStyled>
    )
}

const SideBarStyled = styled.div`
    width: 10rem;
    position: fixed;
    height: 100vh;
    background-color: var(--sidebar-dark-color);
    overflow: hidden;
    transition: all .4s ease-in-out;
    @media screen and (max-width: 1200px) {
        transform: translateX(-100%);
        z-index: 20;
    }
`;

export default SideBar;