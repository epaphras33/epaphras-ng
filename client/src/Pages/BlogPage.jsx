import styled from "styled-components";
import blogs from "../Data/blogs";
import Title from "../Components/Title";
import { MainLayout, InnerLayout } from "../Styles/Layouts";

function BlogPage() {
    
    return (
        <MainLayout>
            <BlogPageStyled>

                {/* MAPPED BLOG SECTION!!! */}
                <Title title={"Blogs"} span={"Blogs"} />
                <InnerLayout className="blog">
                    {
                        blogs.map(blog => {
                            const { id, title, image, link } = blog;
                            return (
                                <article key={id} className="blog-item" data-aos="zoom-in">
                                    <div className="image">
                                        <img src={image} alt={title} />
                                    </div>
                                    <div className="title">
                                        <a href={link} aria-label="read more">{title}</a>
                                    </div>
                                </article>
                            )
                        })
                    }
                </InnerLayout>
                {/* END OF MAPPED BLOG SECTION!!! */}

            </BlogPageStyled>
        </MainLayout>
    )
}

const BlogPageStyled = styled.section`
    .blog {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 1rem;
        grid-row-gap: 1.5rem;
        @media screen and (max-width: 770px) {
            grid-template-columns: repeat(1, 1fr);
        }
        .blog-item {
            padding: 1rem 1rem;
            background-color: var(--background-dark-grey);
        }
        .image {
            width: 100%;
            overflow: hidden;
            padding-bottom: .5rem;
            img {
                width: 100%;
                height: 90%;
                object-fit: cover;
                transition: all .4s ease-in-out;
                &:hover {
                    cursor: pointer;
                    transform: scale(1.1);
                }

            }
        }
        .title { 
            a {
                color: var(--white-color);
                font-size: inherit;
                text-transform: capitalize;
                cursor: pointer;
                transition: all .4s ease-in-out;
                @media screen and (max-width: 502px) {
                    font-size: 16px;
                }
                &:hover {
                    color: var(--primary-color);
                }
            }
        }
    }
`;

export default BlogPage;