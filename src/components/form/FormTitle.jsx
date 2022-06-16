import styled from "styled-components";
import { colors, fontSizes, margins } from "../../theme/theme";

const Title = styled.h3`
    width: 100%;
    margin-bottom: ${margins.sm};
    text-align: center;
    font-size: ${fontSizes.md};
    font-weight: 700;
    color: ${colors.bg};
`;

const FormTitle = ({ children }) => (
    <Title>{children}</Title>
);
export default FormTitle;