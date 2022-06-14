import styled from "styled-components";
import { fontSizes, margins } from "../../theme/theme";

const Label = styled.label`
    width: 90%;
    margin: .25rem;
    font-size: ${fontSizes.xs};
    font-weight: bold;
    color: #2f3236;
    opacity: .8;
`;

const InputLabel = ({ children }) => (
    <Label>{children}</Label>
);
export default InputLabel;