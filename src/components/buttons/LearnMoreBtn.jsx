import styled from "styled-components";
import { paddings } from "../../theme/theme";

const StyledButton = styled.button`
    display: block;
    margin: 0 auto;
    padding: .75rem ${paddings.sm};
    color: white;
    background: inherit;
    border: 2px solid white;
    text-transform: uppercase;
    letter-spacing: .05rem;
    cursor: pointer;

    &:hover {
        color: lightgrey;
        border-color: lightgrey;
    }
`;

const LearnMoreBtn = ({ children }) => (<StyledButton type="button">{children}</StyledButton>);

export default LearnMoreBtn;