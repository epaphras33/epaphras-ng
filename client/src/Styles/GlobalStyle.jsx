import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    :root {
        --primary-color: #007bff;
        --primary-color-light: #057FFF;
        --secondary-color: #6c757d;
        --background-dark-color: #10121A;
        --background-dark-grey: #191D2B;
        --background-light-color: #F1F1F1;
        --background-light-color-2: rgba(3,127,255,.3);
        --border-color: #2e344e;
        --white-color: #FFF;
        --font-light-color: #a4acc4;
        --font-dark-color: #313131;
        --font-dark-color-2: #151515;
        --sidebar-dark-color: #191D2B;
        --scrollbar-bg-color: #383838;
        --scrollbar-thump-color: #6b6b6b;
        --scrollbar-track-color: #383838;
    } 

    /* LIGHT MODE THEME!!! */
    .light-theme {
        --primary-color: #007bff;
        --primary-color-light: #057FFF;
        --secondary-color: #ff7675;
        --background-dark-color: #F1F1F1;
        --background-dark-grey: #e4e4e4;
        --border-color: #cbced8;
        --background-light-color: #F1F1F1;
        --background-light-color-2: rgba(3,127,255,.3);
        --white-color: #151515;
        --font-light-color: #313131;
        --font-dark-color: #313131;
        --font-dark-color-2: #151515;
        --sidebar-dark-color: #E4E4E4;
        --scrollbar-bg-color: #383838;
        --scrollbar-thump-color: #6b6b6b;
        --scrollbar-track-color: #383838;
        --title-span-color: rgba(25, 29, 43, .44);
    }

    /* DARK MODE THEME!!! */
    .dark-theme {
        --primary-color: #007bff;
        --primary-color-light: #057FFF;
        --secondary-color: #6c757d;
        --background-dark-color: #10121A;
        --background-dark-grey: #191D2B;
        --background-light-color: #F1F1F1;
        --background-light-color-2: rgba(3,127,255,.3);
        --border-color: #2e344e;
        --white-color: #FFF;
        --font-light-color: #a4acc4;
        --font-dark-color: #313131;
        --font-dark-color-2: #151515;
        --sidebar-dark-color: #191D2B;
        --scrollbar-bg-color: #383838;
        --scrollbar-thump-color: #6b6b6b;
        --scrollbar-track-color: #383838;
        --title-span-color: rgba(25, 29, 43, .44);
    }

    /* GENERAL SELECTION!!! */
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        list-style-type: none;
        text-decoration: none;
        font-family: "Roboto Condensed", sans-serif;
        font-size: 18px;
        line-height: 150%;
    }

    /* BODY SELECTION!!! */
    body {
        background-color: var(--background-dark-color);
        color: var(--font-light-color);
    }

    body::-webkit-scrollbar {
        width: 9px;
        background-color: var(--scrollbar-bg-color);
    }

    body::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background-color: var(--scrollbar-thump-color);
    }

    body::-webkit-scrollbar-track {
        border-radius: 10px;
        background-color: var(--scrollbar-track-color);
    }

    /* PARAGRAPH SELECTION!!! */
    p {
        font-size: 18px;
    }

    /* LINKS SELECTION!!! */
    a {
        font-family: inherit;
        color: inherit;
        font-size: 18px;
    }

    /* SPAN SELECTION!!! */
    span {
        color: var(--primary-color);
    }

    /* THEME TOGGLING!!! */
    .light-dark-mode {
        position: fixed;
        right: 0;
        top: 50%;
        background-color: var(--background-light-color-2);
        width: 4.5rem;
        height: 2rem;
        z-index: 100;
        display: flex;
        align-items: center;
        justify-content: center;
        svg {
            display: flex;
            align-items: center;
            font-size: 1.2rem;
            color: var(--white-color);
        }
    }

    /* NAV TOGGLING!!! */
    .hamburger-menu {
        position: absolute;
        right: 5%;
        top: 3%;
        display: none;
        z-index: 15;
        svg {
            font-size: 2rem;
        }
    }
    .nav-toggle {
        transform: translateX(0);
        z-index: 20;
    }
    @media screen and (max-width: 1200px) {
        .hamburger-menu {
            display: block;
        }
    }
`;

export default GlobalStyle;