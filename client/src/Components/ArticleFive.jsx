import { InnerLayout, MainLayout } from "../Styles/Layouts";
import styled from "styled-components";
import reactImg from "../Images/articles/react.jpeg";

function ArticleFive() {

    return (    
        <ArticleFiveStyled>
            <MainLayout>
                <article data-aos="fade-up">
                    <h1 className="article-title">What And Why React.js</h1>
                    {/* <p className="article-subTitle"></p> */}
                    <p className="article-author"><strong>By Nitin Pandit</strong></p>
                    <p className="article-date"><em>Published February 10, 2021</em></p>
                    <InnerLayout>
                        <article>
                            <img src={reactImg} className="article-img" alt="html" />
                            <p className="article-text">React.js is the most popular front-end JavaScript library for building Web applications. React.js or Reactjs or simply React are different ways to represent React.js. Most fortune 500 companies use Reactjs  In this article, we will learn what React.js (or simply React or Reactjs) is and why we should use Reactjs instead of other JavaScript frameworks like Angular.</p>
                            <h2 className="article-heading">What is React.js?</h2>
                            <p className="article-text">React.js is an open-source JavaScript library that is used for building user interfaces specifically for single-page applications. It’s used for handling the view layer for web and mobile apps. React also allows us to create reusable UI components. React was first created by Jordan Walke, a software engineer working for Facebook. React first deployed on Facebook’s newsfeed in 2011 and on Instagram.com in 2012.</p>
                            <p className="article-text width">React allows developers to create large web applications that can change data, without reloading the page. The main purpose of React is to be fast, scalable, and simple. It works only on user interfaces in the application. This corresponds to the view in the MVC template. It can be used with a combination of other JavaScript libraries or frameworks, such as Angular JS in MVC.</p>
                            <p className="article-text width">React JS is also called simply to React or React.js.</p>
                            <h2 className="article-heading">What are the React.js Features?</h2>
                            <p className="article-text width">Let us take a closer look at some important features of React.</p>
                            <p className="article-text width">React.js properties includes the following: </p>
                            <p className="article-text width">
                                <ul>
                                    <li>React.js is declarative</li>
                                    <li>React.js is simple</li>
                                    <li>React.js is component based</li>
                                    <li>React.js is supports server side</li>
                                    <li>React.js is extensive</li>
                                    <li>React.js is fast</li>
                                    <li>React.js is easy to learn</li>
                                </ul>
                            </p>
                            <h3 className="article-heading">JSX</h3>
                            <p className="article-text width">In React, instead of using regular JavaScript for templating, it uses JSX. JSX is a simple JavaScript that allows HTML quoting and uses these HTML tag syntax to render subcomponents. HTML syntax is processed into JavaScript calls of React Framework. We can also write in pure old JavaScript.</p>
                            <h2 className="article-heading">Why React?</h2>
                            <p className="article-text width">Now, the main question arises in front of us is why one should use React. There are so many open-source platforms for making the front-end web application development easier, like Angular. Let us take a quick look on the benefits of React over other competitive technologies or frameworks. With the front-end world-changing on a daily basis, it’s hard to devote time to learning a new framework – especially when that framework could ultimately become a dead end. So, if you're looking for the next best thing but you're feeling a little bit lost in the framework jungle, I suggest checking out React.</p>
                            <h4 className="article-heading"><em>1. Simplicity</em></h4>
                            <p className="article-text width">ReactJS is just simpler to grasp right away. The component-based approach, well-defined lifecycle, and use of just plain JavaScript make React very simple to learn, build a professional web (and mobile applications), and support it. React uses a special syntax called JSX which allows you to mix HTML with JavaScript. This is not a requirement; Developer can still write in plain JavaScript but JSX is much easier to use.</p>
                            <h4 className="article-heading"><em>2. Easy to learn</em></h4>
                            <p className="article-text width">Anyone with a basic previous knowledge in programming can easily understand React while Angular and Ember are referred to as ‘Domain-specific Language’, implying that it is difficult to learn them. To react, you just need basic knowledge of CSS and HTML.</p>
                            <h4 className="article-heading"><em>3. Native Approach</em></h4>
                            <p className="article-text width">React can be used to create mobile applications (React Native). And React is a diehard fan of reusability, meaning extensive code reusability is supported. So at the same time, we can make IOS, Android and Web applications.</p>
                            <h4 className="article-heading"><em>4. Data Binding</em></h4>
                            <p className="article-text width">React uses one-way data binding and an application architecture called Flux controls the flow of data to components through one control point – the dispatcher. It's easier to debug self-contained components of large ReactJS apps.</p>
                            <h4 className="article-heading"><em>5. Performance</em></h4>
                            <p className="article-text width">React does not offer any concept of a built-in container for dependency. You can use Browserify, Require JS, EcmaScript 6 modules which we can use via Babel, ReactJS-di to inject dependencies automatically.</p>
                            <h4 className="article-heading"><em>6. Testability</em></h4>
                            <p className="article-text width">ReactJS applications are super easy to test. React views can be treated as functions of the state, so we can manipulate with the state we pass to the ReactJS view and take a look at the output and triggered actions, events, functions, etc. </p>
                        </article>
                    </InnerLayout>
                </article> 
            </MainLayout>
        </ArticleFiveStyled>
    )
}

const ArticleFiveStyled = styled.section`
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

export default ArticleFive;
