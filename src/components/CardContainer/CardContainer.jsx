import { devices, margins } from "../../theme/theme";
import styled from "styled-components";

const Container = styled.div`
  margin: ${margins.lg} auto 3rem;

  ${devices.mobile} {
    max-width: unset;
  }

  ${devices.laptop} {
    display: flex;
    justify-content: space-between;
    max-width: 55rem;
  }
`;

const CardContainer = ({ className, children }) => <Container className={className}>{children}</Container>;

export default CardContainer;