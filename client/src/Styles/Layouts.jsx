import styled from "styled-components";

export const MainLayout = styled.div`
    padding: 2.5rem;
    @media screen and (max-width: 642px) {
        padding: 1.5rem;
    }
    /* @media screen and (max-width: 510px) {
        padding: 1.3rem;
    } */
    @media screen and (max-width: 571px) {
        padding: 2rem .4rem;
    }
`;

export const InnerLayout = styled.div`
    padding: 2.5rem 0;
`;