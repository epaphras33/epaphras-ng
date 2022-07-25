import { InnerLayout, MainLayout } from "../Styles/Layouts";
import styled from "styled-components";
import htmlImg from "../Images/articles/html.jpeg";

function ArticleOne() {

    return (    
        <ArticleOneStyled>
            <MainLayout>
                <article data-aos="fade-up">
                    <h1 className="article-title">5 Steps to Understanding Basic HTML Code</h1>
                    <p className="article-subTitle">HTML is the backbone of every webpage. If you're a beginner, let us walk you through the basic steps to understanding HTML.</p>
                    <p className="article-author"><strong>By Ben Stegner</strong></p>
                    <p className="article-date"><em>Published March 12, 2019</em></p>
                    <InnerLayout>
                        <img src={htmlImg} className="article-img" alt="html" />
                        <p className="article-text">HTML is a vital part of the web as we know it. And while few web designers create pages by manually typing HTML, it's still handy to know a little bit about it.</p>
                        <p className="article-text">We're going to look at some basics of the language, including what HTML really is, some fundamental concepts, and how it interacts with other languages. Think of this as an "HTML for dummies" crash course.</p>
                        <p className="article-text">We're going to look at some basics of the language, including what HTML really is, some fundamental concepts, and how it interacts with other languages. Think of this as an "HTML for dummies" crash course.</p>
                        <h2 className="article-heading">HTML Basics: What Is HTML?</h2>
                        <p className="article-text width">HTML stands for Hypertext Markup Language. And while it's sometimes lumped in with programming languages, this isn't accurate.</p>
                        <p className="article-text width">As a markup language, HTML only lets you create the display layout of pages. A true programming language, like Java or C++, contains logic and commands that are carried out.</p>
                        <p className="article-text width">While it's simple, HTML is at the backbone of every page on the web. It's responsible for what text shows up as bold, adding images, and linking to other pages. We have an <a className="article-link" href="https://www.w3schools.com/html/default.asp" target="_blank" rel="noreferrer">HTML FAQ </a>that explains more.</p>
                        <p className="article-text width">Even if you have zero experience with markup or programming languages, learning a bit about HTML will make you a more informed web user. Let's walk through five basic steps to help you understand how HTML works. We'll provide examples along the way.</p>
                        <h3 className="article-heading">Step 1: Understanding the Concept of Tags</h3>
                        <p className="article-text width">HTML uses a system of tags to categorize different elements of the document. Most tags come in pairs to wrap the affected text inside them. For instance, the <code>strong</code> tag comes in pairs and it defines important texts. For more enquiries, look up the <a className="article-link" href="https://www.w3schools.com/tags/default.asp" target="_blank" rel="noreferrer">W3 Schools </a>TAG lists amd their uses.</p>
                        <p className="article-text width">However, not all tags have a pair. Some HTML elements, called empty elements, have no content and exist on their own. An example are the <code>br</code> tag, the <code>img</code> tag, the <code>hr</code> tag &amp; among other tags.</p>
                        <h3 className="article-heading">Step 2: The Skeleton HTML Layout</h3>
                        <p className="article-text width">A proper HTML document must have certain tags defined so it's laid out correctly. The essential parts or tags include the following; the <code>!DOCTYPE html</code> tag, the <code>html</code> tag, the <code>head</code> tag &amp; the <code>body</code> tag.</p>
                        <h3 className="article-heading">Step 3: Basic HTML Tags for Formatting</h3>
                        <p className="article-text width">Next, let's look at some common tags that make up HTML documents. Of course, it's not possible to cover every element, so we'll review some of the most important. We've covered many more <a className="article-link" href="https://www.makeuseof.com/tag/simple-html-code-learn-minutes" target="_blank" rel="noreferrer">HTML examples </a> if these don't satisfy you.</p>
                        <h3 className="article-heading">Step 4: Inserting Images</h3>
                        <p className="article-text width">Images are a vital part of most webpages. You can add them easily with HTML, and even set different properties for them. You insert an image using the <code>img</code> tag with an attribute named <em>src</em>.</p>
                        <h3 className="article-heading">Step 5: Adding Links</h3>
                        <p className="article-text width">The World Wide Web wouldn't be much of a web without links to other pages. Using the <code>a</code> tag with an attribute named <em>href</em>, one can  link to other pages on any website.</p>
                        <h2 className="article-heading">How HTML Connects With CSS and JavaScript</h2>
                        <p className="article-text width">We've looked at the basic of HTML and how it establishes a webpage. But as you can imagine, HTML alone doesn't cut it for the modern web. Simple HTML webpages were common in the "Web 1.0" days, when most websites were nothing more than static text.</p>
                        <p className="article-text width">But now, we have a lot more like the <a className="article-link" href="https://www.w3schools.com/css/default.asp" target="_blank" rel="noreferrer">CSS (Cascading Style Sheets)</a> mainly used to describe how the text you prepared in HTML should look and the <a className="article-link" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer">Javascript</a>  to give your HTML more functionalities!</p>
                        <h2 className="article-heading">The Evolution of HTML</h2>
                        <p className="article-text width">It's important to note that HTML is not static. HTML has gone through several revisions, the most recent being HTML 5. Notably, this standard supports native video embedding instead of relying on proprietary formats like Adobe Flash</p>
                        <h2 className="article-heading">A Little HTML Knowledge Goes a Long Way</h2>
                        <p className="article-text width">We've taken a brief tour of how an HTML document works. Now you know the fundamentals of how webpages are structured. Even if you don't go on to build webpages, you're a bit more aware about the web you use every day.</p>
                        <p className="article-text width">We've taken a brief tour of how an HTML document works. Now you know the fundamentals of how webpages are structured. Even if you don't go on to build webpages, you're a bit more aware about the web you use every day.</p>
                        <p className="article-text width">To learn more, <a className="article-link" href="https://www.w3schools.com" target="_blank" rel="noreferrer">upgrade your web development skills with essential tools</a> and then you can follow this <a className="article-link" href="https://www.freecodecamp.org" target="_blank" rel="noreferrer">guide in building &amp; designing your first website</a>. GOODLUCK!</p>
                    </InnerLayout>
                </article>
            </MainLayout>
        </ArticleOneStyled>
    )
}

const ArticleOneStyled = styled.section`
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

export default ArticleOne;