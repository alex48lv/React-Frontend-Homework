import { colors, margins } from "../../theme/theme";
import styled from "styled-components";

const StyledButton = styled.button`
    width: 100%;
    height: 2rem;
    margin: ${margins.sm} auto;
    text-transform: uppercase;
    letter-spacing: 2px;
    background: #2f3236;
    color: white;
    border-radius: 5px;
`;

const SubmitButton = ({ children }) => (<StyledButton type="submit">{children}</StyledButton>);

export default SubmitButton;