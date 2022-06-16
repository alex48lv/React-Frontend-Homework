import styled from "styled-components";
import { colors, paddings } from "../../theme/theme";

const StyledButton = styled.button`
    display: block;
    margin: 0 auto;
    padding: .75rem ${paddings.sm};
    color: ${colors.white};
    background: inherit;
    border: 2px solid ${colors.white};
    text-transform: uppercase;
    letter-spacing: .05rem;
    cursor: pointer;

    &:hover {
        color: ${colors.lightGrey};
        border-color: ${colors.lightGrey};
    }
`;

const LearnMoreBtn = ({ children }) => (<StyledButton type="button">{children}</StyledButton>);

export default LearnMoreBtn;