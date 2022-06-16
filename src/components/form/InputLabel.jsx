import styled from "styled-components";
import { colors, fontSizes, margins } from "../../theme/theme";

const Label = styled.label`
    width: 90%;
    margin: .25rem;
    font-size: ${fontSizes.xs};
    font-weight: bold;
    color: ${colors.bg};
    opacity: .8;
`;

const InputLabel = ({ children }) => (
    <Label>{children}</Label>
);
export default InputLabel;