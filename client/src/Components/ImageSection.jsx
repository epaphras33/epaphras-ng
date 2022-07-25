import styled from "styled-components";
import resume from "../Images/avatar.png";
import SimCardDownloadIcon from "@mui/icons-material/SimCardDownload";
import Axios from "axios";
import FileDownload from "js-file-download";


function ImageSection() {
    const today = new Date();
    const birthDate = new Date("1993-10-11");
    let month = today.getMonth() - birthDate.getMonth();
    let age = today.getFullYear() - birthDate.getFullYear();
    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) age--;

    const download = (e) => {
        e.preventDefault();
        Axios({
            url: "http://localhost:4000",
            method: "GET",
            responseType: "blob"
        }).then((res) => {
            console.log(res);
            FileDownload(res.data, "ify-epaphras.pdf");
        });
    };

    return (
        <ImageSectionStyled>

            {/* PROFILE IMAGE SECTION!!! */}
            <article className="left-content" data-aos="zoom-in">
                <img src={resume} alt="ify epaphras" />
            </article>
            {/* END OF PROFILE IMAGE SECTION!!! */}

            {/* AUTO-BIO SECTION */}
            <article className="right-content" data-aos="zoom-in">
                <h4>
                    I am <span>Ify Epaphras</span>
                </h4>
                <p className="paragraph">
                    I graduated in 2018 with B.Sc in both Human &amp; Animal Psychology. In March 2021, I started picking interest in Web Development, Basic Computer OS, Data Structures &amp; Algorithms, and Computer Networking. 
                </p>
                <div className="about-info">
                    <div className="info-title">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality</p>
                        <p>City</p>
                        <p>Languages</p>
                        <p>Services</p>
                    </div>
                    
                    <div className="info">
                        <p>Ify Epaphras</p>
                        <p>{age}</p>
                        <p>Nigeria</p>
                        <p>Enugu, NG</p>
                        <p>English, Igbo</p>
                        <p>Freelance</p>
                    </div>
                </div>

                {/* DOWNLOAD BUTTON */}
                <button onClick={(e) => download(e)} className="download-btn" aria-label="download CV" >Download CV <SimCardDownloadIcon /></button>

            </article>
            {/* END OF AUTO-BIO SECTION */}

        </ImageSectionStyled>
    )
}

const ImageSectionStyled = styled.div`
    margin-top: 2.5rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    @media screen and (max-width: 1000px) {
        grid-template-columns: repeat(1, 1fr);
        .left-content {
            margin-bottom: 1rem;
        }
    }
    .left-content {
        width: 100%;
        height: 82vh;
        img {
            width: 90%;
            height: 100%;
            border-top-left-radius: 15%;
            border-top-right-radius: 1%;
            border-bottom-left-radius: 1%;
            border-bottom-right-radius: 15%;
            object-fit: cover;
        }
    }
    .right-content {
        h4 {
            font-size: 30px;
            color: var(--white-color);
            span {
                font-size: 30px;
            }
        }
        .paragraph {
            padding: .5rem 0;
            @media screen and (max-width: 502px) {
                font-size: 16px;
            }
        }
        .about-info {
            display: flex;
            padding-bottom: .5rem;
            .info-title {
                padding-right: 1.5rem;
                p {
                    font-weight: 600;
                    @media screen and (max-width: 502px) {
                        font-size: 16px;
                    }
                }
            }
            .info-title, .info {
                p {
                    padding: .3rem 0;
                    @media screen and (max-width: 502px) {
                        font-size: 16px;
                    }
                }
            }
        }
        .download-btn {
            background-color: var(--primary-color);
            color: var(--white-color);
            padding: .4rem 1.2rem;
            cursor: pointer;
            text-transform: uppercase;
            font-size: 18px;
            position: relative;
            transition: all .4s ease-in-out;
            border-radius: 3px;
            border: none;
            @media screen and (max-width: 502px) {
                font-size: 16px;
            }
            &::after {
                content: "";
                position: absolute;
                width: 0;
                height: .2rem;
                transition: all .4s ease-in-out;
                left: 0;
                bottom: 0;
                opacity: .7;
            }
            &:hover::after {
                width: 100%;
                background-color: var(--white-color);
            }
        }
    }
`;

export default ImageSection;