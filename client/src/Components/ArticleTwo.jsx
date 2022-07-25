import { InnerLayout, MainLayout } from "../Styles/Layouts";
import styled from "styled-components";
import cssImg from "../Images/articles/css.jpeg";

function ArticleTwo() {

    return (    
        <ArticleTwoStyled>
            <MainLayout>
                <article data-aos="fade-up">
                    <h1 className="article-title">Tech 101: The Ultimate Guide To CSS</h1>
                    <p className="article-subTitle">CSS is the language that makes the web look nice.</p>
                    <p className="article-author"><strong>By Scott Morris</strong></p>
                    <p className="article-date"><em>Published NA</em></p>
                    <InnerLayout>
                        <img src={cssImg} className="article-img" alt="html" />
                        <p className="article-text">Remember HTML (Hypertext Markup Language)? The coding language that serves as the foundation for all web development? Well, if HTML is the first language you’ll want to learn when you’re interested in building websites, its cousin CSS is a close second programming language to learn.</p>
                        <p className="article-text">Whether you’re a front end developer, a full stack developer, or someone starting in web design, how to use a CSS style sheet is something you should definitely know how to do!</p>
                        <h2 className="spacing">What is CSS? And How Does It Relate to HTML?</h2>
                        <p className="article-text width">So what is CSS and what is CSS used for? CSS stands for Cascading Style Sheets with an emphasis placed on “Style” and the latest version is CSS 3.</p>
                        <p className="article-text width">While Hypertext Markup Language (HTML) is used to structure a web document (defining things like headlines and paragraphs, and allowing you to embed images, video, and other media), Cascading Style Sheet language comes through and specifies your document’s style — page layouts, colors, and fonts (shoutout to font-family and font-style!) are all determined with CSS syntax, meaning that CSS is one important language for you to master in terms of styling your web pages!</p>
                        <p className="article-text width">Think of HTML as the foundation (every house has one), and Cascading Style Sheets as the aesthetic choices (there’s a big difference between a Victorian mansion and a mid-century modern home). You need both to create a web page and JavaScript to make it interactive.</p>
                        <h2 className="article-heading">How Does CSS Work?</h2>
                        <p className="article-text width">CSS 3 brings style to your web pages by interacting with HTML elements using syntax.</p>
                        <p className="article-text width">You might be wondering how this CSS code is actually applied to HTML content, though. Much like HTML, Cascading Style Sheets are written in simple, plain text through a text editor or word processor on your computer, and there are three main ways to add that CSS code to your HTML styled pages. CSS code (or a style sheet) can be external, internal, or inline.</p>
                        <p className="article-text width">External style sheets are saved as a CSS file (.css) and can be used to determine the appearance of an entire website through one file (rather than adding individual instances of CSS code to every HTML element you want to adjust). To use this type of style sheet, your .html files need to include a header section that links to the external style sheet. <br /> This will link the .html file to your style sheet (in this case, mysitestyle.css), and all of the CSS instructions in that file will then apply to your linked .html pages.</p>
                        <p className="article-text width">Internal style sheets are CSS instructions written directly into the header of a specific .html page. (This is especially useful if you have a single page on a site that has a unique look.)</p>
                        <p className="article-text width">Finally, inline styles are snippets of CSS written directly into HTML code, and applicable only to a single coding instance, without an extra CSS file.</p>
                        <p className="article-text width">Generally speaking, an external style sheet is the most efficient method for implementing CSS on a website (it’s easier to keep track of and implement a site’s style from a dedicated CSS file), while internal style sheets and inline style can be used on a case by case basis when individual style changes need to be made.</p>
                        <p className="article-text width">So if HTML is the foundation, frames, walls, and girders supporting your website, consider CSS the paint color, window styles, and landscaping that comes on afterward. You can’t get anywhere without putting that foundation up first, but —once you do — you’ll want to follow up with some style, and CSS is the ticket to unleashing your inner decorator. <a className="article-link" href="https://skillcrush.com/blog/html-css-projects" target="_blank" rel="noreferrer">What’s next after you become a CSS master?</a>  JavaScript, of course!</p>
                        <p className="article-text width"><strong>PS: </strong>If you’d like to learn more about CSS, front end development, or web design, Skillcrush can help you get there! <a className="article-link" href="https://skillcrush.com/break-into-tech-blueprint" target="_blank" rel="noreferrer">Our Break Into Tech course</a> is a comprehensive program designed to help total beginners in tech start a new and fulfilling career.</p>
                    </InnerLayout>
                </article>
            </MainLayout>
        </ArticleTwoStyled>
    )
}

const ArticleTwoStyled = styled.section`
    .article-title {
        color: var(--white-color);
        font-size: 30px;
        font-weight: 300;
        text-transform: uppercase;
        padding-bottom: .4rem;
        @media screen and (max-width: 620px) {
            margin-top: 3rem;
            font-size: 21px;
        }
        @media screen and (max-width: 370px) {
            margin-top: 3rem;
            font-size: 18px;
        }

    }
    .article-subTitle {
        width: 60%;
        @media screen and (max-width: 620px) {
            width: 100%;
        }
        @media screen and (max-width: 370px) {
            width: 100%;
        }
    }
    .article-author {
        text-transform: uppercase;
    }
    .article-date {
        font-size: 12px;
        color: var(--primary-color);
    }
    .article-img {
        float: left;
        margin: 5px 30px 10px 0;
        border: 3px solid var(--primary-color);
        border-radius: 5px;
        @media screen and (max-width: 620px) {
            width: 100%;
        }
        @media screen and (max-width: 370px) {
            width: 100%;
        }
    }
    .article-text {
        line-height: 1.7;
        code {
            font-family: Consolas, "courier new";
            color: crimson;
            background-color: #f1f1f1;
            padding: 2px;
            font-size: 105%;
          }
        .article-link {
            text-decoration: underline;
            color: var(--primary-color);
        }
    }
    .article-heading {
        margin-top: 3rem;
    }
    .width {
        width: 80%;
        @media screen and (max-width: 620px) {
            width: 100%;
        }
        @media screen and (max-width: 370px) {
            width: 100%;
        }
    }
`;

export default ArticleTwo;