import styled from "styled-components";
import { colors, fontSizes } from "../../theme/theme";

const Header = styled.h1`
    margin-top: 8rem;
    font-size: ${fontSizes.xl};
    font-weight: 400;
    color: ${colors.white};
    text-align: center;
    letter-spacing: -.1rem;
`;

const H1Header = ({ children }) => (<Header>{children}</Header>);

export default H1Header;