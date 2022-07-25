import styled from "styled-components";
import Title from "./Title";
import AddressCard from "./AddressCard";
import { InnerLayout } from "../Styles/Layouts";
import { Phone, Email, LocationOn } from "@mui/icons-material";

function Address() {
    const phone = <Phone />;
    const email = <Email />;
    const address = <LocationOn />;

    return (
        <InnerLayout>
            <StyledAddress>

                {/* CONTACT & ADDRESS INFO SECTION!!! */}
                <Title title={"Address"} span={"Address"} />
                <article className="address" data-aos="fade-up">
                    <AddressCard
                        icon={phone}
                        title={"Mobile No"}
                        textOne={"+234 90 1250 7104"}
                        textTwo={"+234 81 6433 4048"}
                    />
                    <div className="mid-card">
                        <AddressCard
                            icon={email}
                            title={"Email"}
                            textOne={"epaphras1000@gmail.com"}
                            textTwo={"epaphras1000@yahoo.com"}
                        />
                    </div>
                    <AddressCard
                        icon={address}
                        title={"Address"}
                        textOne={"Zion Avenue Coal Camp, Ogbete Enugu, NG"}
                    />
                </article>
                {/* END OF CONTACT & ADDRESS INFO SECTION!!! */}

            </StyledAddress>
        </InnerLayout>
    )
}

const StyledAddress = styled.div`
    .address {
        margin-top: 2.5rem;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 1rem;
        svg {
            font-size: 45px;
            @media screen and (max-width: 502px) {
                font-size: 35px;
            }
        }
        @media screen and (max-width: 1000px) {
            flex-direction: column;
        }
        @media screen and (max-width: 950px) {
            grid-template-columns: repeat(2, 1fr);
        }
        @media screen and (max-width: 650px) {
            grid-template-columns: repeat(1, 1fr);
        }       
    }
`;

export default Address;