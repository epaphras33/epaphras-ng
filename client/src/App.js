import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { Switch, IconButton } from "@mui/material";
import { Brightness4 } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import styled from "styled-components";
import Aos from "aos";

import SideBar from "./Components/SideBar";
import Loading from "./Components/Loading";

import AboutPage from "./Pages/AboutPage";
import BlogPage from "./Pages/BlogPage";
import ContactPage from "./Pages/ContactPage";
import HomePage from "./Pages/HomePage";
import PortfolioPage from "./Pages/PortfolioPage";
import ResumePage from "./Pages/ResumePage";
import ArticleOne from "./Components/ArticleOne";
import ArticleTwo from "./Components/ArticleTwo";
import ArticleThree from "./Components/ArticleThree";
import ArticleFour from "./Components/ArticleFour";
import ArticleFive from "./Components/ArticleFive";

const App = () => {
  const [theme, setTheme] = useState("dark-theme");
  const [checked, setChecked] = useState(false);
  const [navToggle, setNavToggle] = useState(false);
  const [done, setDone] = useState(undefined);
  
  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  useEffect(() => {
      Aos.init({
          duration: 2000
      });
  }, []);

  const themeToggle = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme");
      setChecked(false);
    } else {
      setTheme("light-theme");
      setChecked(true);
    }
  }

  setTimeout(() => {
    setDone(true);
  }, 5000);

  const lightDarkToggle = <Brightness4 />
  const menuToggle = <MenuIcon />
  return (
    <>
      { !done ? (<Loading type={"spinningBubbles"} color={"#007bff"}  />) : (
        <div className="app">
        <SideBar navToggle={navToggle} />
        <aside className="theme">
          <div className="light-dark-mode">
            <div className="left-content" aria-label="light and dark theme toggle">{lightDarkToggle}</div>
            <div className="right-content">
              <Switch
                value=""
                checked={checked}
                onClick={themeToggle}
                inputProps={{ "aria-label": "toggle light-dark theme" }}
                size="medium"
              />
            </div>
          </div>
        </aside>
        <div className="hamburger-menu">
          <IconButton sx={{color: "#007bff"}} onClick={() => setNavToggle(!navToggle)} aria-label="menu toggle button">
            {menuToggle}
          </IconButton>
        </div>
        <MainContentStyled>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/resume" element={<ResumePage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/article1" element={<ArticleOne />} />
            <Route path="/article2" element={<ArticleTwo />} />
            <Route path="/article3" element={<ArticleThree />} />
            <Route path="/article4" element={<ArticleFour />} />
            <Route path="/article5" element={<ArticleFive />} />
          </Routes>
        </MainContentStyled>
        </div>
      )}
    </>
  );
};

const MainContentStyled = styled.main`
  position: relative;
  margin-left: 10rem;
  min-height: 100vh;
  @media screen and (max-width: 1200px) {
      margin-left: 0;
  }
`;

export default App;