import { devices, margins } from "../../theme/theme";
import styled from "styled-components";

const Container = styled.div`
  margin: ${margins.lg} auto 3rem;

  ${devices.mobile} {
    max-width: unset;
  }

  ${devices.laptop} {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    max-width: 55rem;
  }
`;

const CardContainer = ({ children }) => <Container>{children}</Container>;

export default CardContainer;