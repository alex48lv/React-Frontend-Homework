import { colors, fontSizes } from "../theme/theme";
import styled from "styled-components";

const ContentContainer = styled.div`
    width: 100%;
    height: calc(100vh - 10rem);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    h3 {
        color: ${colors.white};
        font-size: ${fontSizes.xl};
        font-weight: 700;
    }

    p {
        font-size: ${fontSizes.lg};
        color: ${colors.lightGrey};
        font-weight: 700;
    }
`;

const NotFound = () => {
    return (
        <ContentContainer>
            <h3>404</h3>
            <p>Page not found</p>
        </ContentContainer>
    )
};

export default NotFound;