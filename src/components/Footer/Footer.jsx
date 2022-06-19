import styled from "styled-components";
import { colors, fontSizes, margins } from "../../theme/theme";

const StyledFooter = styled.footer`
  width: 100%;
  height: 6rem;
  bottom: 0;
  margin-top: ${margins.lg};
  text-align: center;
  font-size: ${fontSizes.sm};
`;

const Icons = styled.div`
  width: 9rem;
  height: 2rem;
  margin: ${margins.sm} auto;
  display: flex;
  justify-content: space-between;
`;

const Icon = styled.a`
  width: 2rem;
  height: 2rem;

  img {
    width: 2rem;
    height: 2rem;
  }
`;

const Copyright = styled.div`
  color: ${colors.lightGrey};
  font-size: ${fontSizes.xs};
`;

const Footer = () => {
  return (
    <StyledFooter>
      <hr />
      <Icons>
        <Icon href="/fb" target="_blank">
          <img src={require("../../assets/icons/fb-logo.png")} alt="facebook" />
        </Icon>
        <Icon href="/tw" target="_blank">
          <img src={require("../../assets/icons/tw-logo.png")} alt="twitter" />
        </Icon>
        <Icon href="/inst" target="_blank">
          <img src={require("../../assets/icons/inst-logo.png")} alt="instagram" />
        </Icon>
      </Icons>
      <Copyright>© 2022 Aleksandrs Noviks</Copyright>
    </StyledFooter>
  );
};

export default Footer;
