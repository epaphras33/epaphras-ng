import ReactLoading from "react-loading";
import styled from "styled-components";

const Loading = ({ type, color }) => (
	<LoadingStyled>
		<ReactLoading type={type} color={color} height={"10%"} width={"10%"} />
	</LoadingStyled>
);

export default Loading;

const LoadingStyled = styled.div`
	min-height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
`;