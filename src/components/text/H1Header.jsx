import styled from "styled-components";

const Header = styled.h1`
    margin-top: 8rem;
    font-size: 3.5rem;
    font-weight: 400;
    color: white;
    text-align: center;
    letter-spacing: -.1rem;
`;

const H1Header = ({ children }) => (<Header>{children}</Header>);

export default H1Header;