import { InnerLayout, MainLayout } from "../Styles/Layouts";
import styled from "styled-components";
import frameworkImg from "../Images/articles/framework.jpeg";

function ArticleFour() {

    return (    
        <ArticleFourStyled>
            <MainLayout>
                <article data-aos="fade-up">
                    <h1 className="article-title">10 Best Web Development Frameworks</h1>
                    {/* <p className="article-subTitle"></p> */}
                    <p className="article-author"><strong>By Aman Goel</strong></p>
                    <p className="article-date"><em>Published June 07, 2022</em></p>
                    <InnerLayout>
                        <img src={frameworkImg} className="article-img" alt="html" />
                        <p className="article-text">Frameworks have become an essential part of web development, as the standards of web applications are always rising, so does the complexity of the technology needed. It’s completely unreasonable to reinvent the wheel for such sophisticated techniques -assuming that you can reinvent all that. That’s why using frameworks endorsed by thousands of developers around the world is a very sensible approach for building rich and interactive web applications. A web app has a backend (server-side) and a frontend (client-side), so we discuss both best Backend frameworks as well as frontend frameworks.</p>
                        <h2 className="article-heading">Best Backend Frameworks</h2>
                        <p className="article-text width">From RESTful APIs to complete MVC frameworks, here are some of the most robust backend frameworks in 2022 that you might be interested to learn.</p>
                        <h3 className="article-heading">Express</h3>
                        <p className="article-text width">Thanks to the skyrocketing popularity of Node.js, Express is quickly becoming one of the most trending best framework for web development nowadays. It is popular amongst Accenture, IBM and Uber, and many other companies, and it’s also compatible with other frameworks such as Kraken, Sails, and Loopback.</p>
                        <p className="article-text width">Express prides itself as a minimal, fast, and unopinionated framework. It provides some core framework functionalities without obscuring the features of Node and leverages the robust performance of the asynchronous Node.js. It’s also quite flexible and supports full applications as well as REST API, as well. Perhaps the biggest drawback of Express is the fact that there’s no defined way of doing things, at least for beginners.</p>
                        <p className="article-text width">Express GitHub Link: <a className="article-link" href="https://github.com/expressjs/express" target="_blank" rel="noreferrer">https://github.com/expressjs/express</a></p>
                        <h3 className="article-heading">Django</h3>
                        <p className="article-text width">Django is a Model-View-Template framework that uses Python for web development. Big names such as Google, Youtube, and Instagram use this framework. Django boasts its batteries-included feature, which is a bunch of features such as authentication and messaging that Django has. It follows the Convention Over Configuration pattern and the DRY pattern as well. Security in Django is essential. Django provides techniques and tools for developers to build a secure website or implements the security features in the framework itself, like preventing code execution in the template layer. Here is our detailed post on Django: <a className="article-link" href="https://hackr.io/blog/what-is-django-advantages-and-disadvantages-of-using-django" target="_blank" rel="noreferrer">What is Django? Advantages and Disadvantages of using Django</a></p>
                        <p className="article-text width">Django Github Link: <a className="article-link" href="https://github.com/django/django" target="_blank" rel="noreferrer">https://github.com/django/django</a></p>
                        <h3 className="article-heading">Rails</h3>
                        <p className="article-text width">Rails is a Model-View-Controller framework that uses Ruby, and it’s a popular framework that is loved by many developers. Airbnb, GitHub, Hulu, and Shopify are primary users of Rails. Rails is considered a beginner-friendly framework, and the fact pros and cons are debated, helps beginners get started with web development quite quickly. There are many useful gems for rails, which are library-like dependencies that extend the functionalities of your application and helps you develop even faster and more efficiently. The Rails community is quite reliable and friendly, and there are many tutorials, screencasts, and resources that can help you become a rails expert in no time.</p>
                        <p className="article-text width">The main disadvantage of rails lies in the fact that they take quite some effort to deploy and run in a production environment, and the learning curve of rails becomes steep once you dive deeper into the framework to unravel the magic behind it.</p>
                        <p className="article-text width">Rails Github Link: <a className="article-link" href="https://github.com/rails/rails" target="_blank" rel="noreferrer">https://github.com/rails/rails</a></p>
                        <h3 className="article-heading">Laravel</h3>
                        <p className="article-text width">Laravel is a Model-View-Controller framework that uses PHP, which is one of the most popular languages of the web. It’s relatively young compared to other frameworks on this list.</p>
                        <p className="article-text width">Laravel comes with API support out of the box, and it also possesses a decent amount of packages that could extend its reach. Laracasts is a screencasts tutorials website with over a thousand videos on PHP, Laravel, and frontend technologies in the Laravel ecosystem that could be considered to be a beginner’s heaven. In terms of performance, however, Laravel doesn’t compare to Django or Express, which might be a drawback for massive projects.</p>
                        <p className="article-text width">Laravel Github Link: <a className="article-link" href="https://github.com/laravel/laravel" target="_blank" rel="noreferrer">https://github.com/laravel/laravel</a></p>
                        <h3 className="article-heading">Spring</h3>
                        <p className="article-text width">Spring is a Model-View-Controller framework that uses Java, the all-time popular language. Websites like Wix, TicketMaster, and BillGuard are users of this framework. Spring possesses many sister projects that boost its performance and let you scale your business quickly. The fact that it uses Java, a strongly typed language, is a severe pro to many web developers. The learning curve might be quite steep tho, especially if you don’t know Java.</p>
                        <p className="article-text width">Spring Github Link: <a className="article-link" href="https://github.com/spring-projects/spring-framework" target="_blank" rel="noreferrer">https://github.com/spring-projects/spring-framework</a></p>
                        <h2 className="article-heading">Frontend Javascript Frameworks</h2>
                        <h3 className="article-heading">Angular</h3>
                        <p className="article-text width">Angular is a front-end framework that specializes in building rich Single-Page applications. It’s a vibrant framework able to build complete client-side applications, and there’s so much to do and learn in Angular. Angular 1.x used Javascript, but later releases adopted Typescript, which is a superset of Javascript. Angular’s main cons are its size compared to other frameworks, and the fact it’s not SEO friendly by nature, though it can be SEO optimized. Google developed angular, and Google, Microsoft, and Paypal use it.</p>
                        <p className="article-text width">Angular Github Link: <a className="article-link" href="https://github.com/angular" target="_blank" rel="noreferrer">https://github.com/angular</a></p>
                        <h3 className="article-heading">React</h3>
                        <p className="article-text width">React is not a framework, it’s a frontend library, but many developers consider it a framework and it’s usually compared in that context. React was the first to adopt the component-based architecture that Angular and Vue, and many other frameworks started to adopt later on. React’s virtual dom makes the dom-manipulation much faster, and it’s quite easy to pick up, mainly thanks to its JSX syntax. React could be used server-side or client-side. It was developed and maintained by Facebook, and Facebook and Instagram use it.</p>
                        <p className="article-text width">React Github Link: <a className="article-link" href="https://github.com/facebook/react" target="_blank" rel="noreferrer">https://github.com/facebook/react</a></p>
                        <h3 className="article-heading">Vue</h3>
                        <p className="article-text width">Vue.js is the new rising star; it started as an individual project and quickly grew into becoming one of the most trending JS frameworks out there. There are many cool things about Vue. First, it’s a progressive framework, which means that if you have an existing project, you can adopt Vue for one portion of the project, and everything would work just fine. Second, it also brings along the component architecture to play, and the Vue ecosystem can help you build complete frontend applications. Some people are wary of using Vue since big companies like Facebook or Google do not support it, but that’s quickly changing as big names are starting to invest in Vue.</p>
                        <p className="article-text width">Vue Github Link: <a className="article-link" href="https://github.com/vuejs/vue" target="_blank" rel="noreferrer">https://github.com/vuejs/vue</a></p>
                        <h3 className="article-heading">Ember</h3>
                        <p className="article-text width">Ember was named the best Javascript framework back in 2015. Today, the Ember community is enormous, and it’s ever-expanding, with new features, and releases added regularly. Ember possesses the two-way data binding that Angular boasts, and it comes with a lot of features and components that you can use out of the box. Google, Microsoft, Heroku, and Netflix use this framework often. Ember revolves around the developer’s productivity and attempts to maximize it by either eliminating the need for time-wasting activities or adopting some JS best practices in its core design.</p>
                        <p className="article-text width">Ember Github Link: <a className="article-link" href="https://github.com/emberjs" target="_blank" rel="noreferrer">https://github.com/emberjs</a></p>
                        <h3 className="article-heading">Backbone</h3>
                        <p className="article-text width">Backbone is an extremely light front-end framework that’s fit for building rich Single-Page applications. It follows an MV* pattern and partly implements the MVC design. Backbone only has one core dependency, which is the Underscore library, and it has a vibrant ecosystem, that when added to Mustache and Marionette, allows you to build complete client-side applications.</p>
                        <p className="article-text width">Ember Github Link: <a className="article-link" href="https://github.com/jashkenas/backbone" target="_blank" rel="noreferrer">https://github.com/jashkenas/backbone</a></p>
                        <h2 className="article-heading">Final Word</h2>
                        <p className="article-text width">I hope you find our list of most popular web frameworks useful. Don’t be scared to pick up a framework and start working on it, it gives you an insight into how to do things, and you’ll find many similarities between frameworks, even across different languages in the same category. Remember that big companies are always migrating and trying new stuff all the time, so there’s no such thing as a dead end.</p>
                        
                    </InnerLayout>
                </article>
            </MainLayout>
        </ArticleFourStyled>
    )
}

const ArticleFourStyled = styled.section`
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

export default ArticleFour;