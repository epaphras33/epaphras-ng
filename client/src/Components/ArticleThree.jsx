import { InnerLayout, MainLayout } from "../Styles/Layouts";
import styled from "styled-components";
import jsImg from "../Images/articles/js.jpeg";

function ArticleThree() {

    return (    
        <ArticleThreeStyled>
            <MainLayout>
                <article data-aos="fade-up">
                    <h1 className="article-title">An Introduction To JavaScript</h1>
                    <p className="article-subTitle">JavaScript is also a fun and rewarding language, which is especially important when you’re just getting started in software development. The community support is very good, so if you get stuck, there’s a good chance that the problem and its solution already exist on the web.</p>
                    <p className="article-author"><strong>By Ify Epaphras</strong></p>
                    <p className="article-date"><em>Published June 22, 2022</em></p>
                    <InnerLayout>
                        <img src={jsImg} className="article-img" alt="html" />
                        <p className="article-text">Now that we’ve gotten a bird’s-eye view of JavaScript, let’s get into the more technical detail. JavaScript was created to add ‘life to webpages’. Just like HTML and CSS, JavaScript is written in plain text files with a .js extension.</p>
                        <p className="article-text">As previously mentioned, JavaScript can be used to accomplish many useful operations on the frontend, like validating forms, alerting users, storing temporary data, and performing calculations—to name just a few.</p>
                        <p className="article-text"><strong>Pro tip: </strong>Apart from the name itself, JavaScript has no relation to Java. Beginners often get confused between the two languages. Remember that Java is an entirely different language made for a different purpose (although you’ll still find it running on certain website backends).</p>
                        <p className="article-text width">Lastly, before we look at today’s itinerary, remember that JavaScript, just like HTML and CSS (but maybe even more so), is a vast language. We’ll only be learning parts of it that are relevant to us today, so we’ll list some good resources at the end if you’d like to learn more.</p>
                        <h2 className="article-heading">JavaScript Basics</h2>
                        <p className="article-text width">JavaScript is a programming language, and like most programming languages, it has some basic constructs that we’ll look at. A program in JavaScript is like a sequence of steps. Similar to how we give directions to a stranger, a computer needs detailed instructions, defined as steps, to accomplish any simple or complex action.</p>
                        <h3 className="article-heading">Variables</h3>
                        <p className="article-text width">Variables are friendly names that hold data. Think of how you call a person by their name as opposed to ‘human’ or ‘one head, two eyes, one nose…’ and so on. Variables are simply human-friendly (and descriptive) names for pieces of data.</p>
                        <h3 className="article-heading">Arithmetic Operators</h3>
                        <p className="article-text width">JavaScript can also be used as a calculator. In fact, a lot of the code you’ll see in the wild will have basic calculations everywhere. It supports all the regular functions, called operators, like plus (+), minus (-), multiply (*), divide (/) and so on.</p>
                        <h3 className="article-heading">Comparison Operators</h3>
                        <p className="article-text width">Comparison operators compare two things together. In English and other languages, we often ask questions like ‘Is it warmer today than yesterday’ or ‘Are these two buildings of the same size?’. The answer to these questions is either a yes or a no, and they’re usually comparing two things (today vs yesterday, building 1 vs building 2 etc). In programming terms, it is either a ‘true’ or ‘false’.</p>
                        <p className="article-text width">
                            <table>
                                <tr>
                                    <th>Operator</th>
                                    <th>Question in asks</th>
                                </tr>
                                <tr>
                                    <td>===</td>
                                    <td>Are the two things equal?*</td>
                                </tr>
                                <tr>
                                    <td>!==</td>
                                    <td>Are the two things unequal?*</td>
                                </tr>
                                <tr>
                                    <td>&#62;=</td>
                                    <td>Is the first thing greater than or equal to the second?</td>
                                </tr>
                                <tr>
                                    <td>&#60;=</td>
                                    <td>Is the first thing less than or equal to the second?</td>
                                </tr>
                                <tr>
                                    <td>&#62;</td>
                                    <td>Is the first thing greater than the second?</td>
                                </tr>
                                <tr>
                                    <td>&#60;</td>
                                    <td>Is the first thing less than the second?</td>
                                </tr>
                            </table>
                        </p>
                        <p className="article-text width">*There are less strict variants of these, namely == and !=, which enable you to compare two things that may not be of the same type. “1” == 1 is true, but “1” === 1 is not true, as “1” is a string, while 1 is a number. We recommend you stick to strict equal/not equal (=== and !==), and avoid the use of == and !=</p>
                        <h3 className="article-heading">Functions</h3>
                        <p className="article-text width">Functions are blocks of code to which we assign a name so that we can reuse them. Say adding two numbers is a common operation for our website.</p>
                        <h3 className="article-heading">Flow Control</h3>
                        <p className="article-text width">Generally, a program in JavaScript will execute line by line. But there are instances when we wish to execute a statement based on some condition, or execute a group of statements multiple times. Such change in the order of execution of code is called flow control.</p>
                        <p className="article-text width">An example will make it clearer. Suppose you wish to show different messages to your users depending on whether they’re 18 and above or not. In plain English, your logic would be as follows: <br /> <em><strong>If age is less than 18,</strong> display “You’re not an adult”, else, display “You’re an adult”</em></p>
                        <h3 className="article-heading">Objects</h3>
                        <p className="article-text width">The last important concept needed for our website is the JavaScript object. Objects are simply containers for key-value pairs, similar to what you’d find in a dictionary. In a dictionary, a key is a word and a value is the meaning of the word. In a JavaScript object, a key is a name, and a value can be anything, even other objects.</p>
                        
                        <p className="article-text width">To learn more about javascript, I suggest you enroll with the <a className="article-link" href="https://www.codecademy.com" target="_blank" rel="noreferrer">Codecademy platform</a> for maximum knowledge.</p>
                    </InnerLayout>
                </article>
            </MainLayout>
        </ArticleThreeStyled>
    )
}

const ArticleThreeStyled = styled.section`
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
        table {
            margin: 3rem 0;
            border-collapse: collapse;
            width: 70%;
            tr:nth-child(even) {
                background-color: var(--background-dark-grey);
            }
            td, th {
                border: 1px solid #dddddd;
                text-align: left;
                padding: 8px;
            }
            @media screen and (max-width: 620px) {
                width: 100%;
            }
            @media screen and (max-width: 370px) {
                width: 100%;
            }

        }
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

export default ArticleThree;