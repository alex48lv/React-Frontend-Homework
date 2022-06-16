import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { colors, devices, fontSizes, margins, paddings, zIndexes } from "../../theme/theme";
import logoImg from "../../assets/logo/pnglogoCopy.png";
import userIcon from "../../assets/icons/icon-person.svg";
import menuIcon from "../../assets/icons/icon-menu.svg";
import { useContext, useState } from "react";
import ModalContext from "../../context/ModelContext";

const NavContainer = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  background: ${colors.white};
`;

const Logo = styled.div`
  display: flex;
`;

const LogoImage = styled.div`
  width: 4rem;
  height: 100%;
  display: inline-block;
  background: url(${logoImg}) center/contain no-repeat;
`;

const Brand = styled.div`
  display: none;
  align-self: center;

  ${devices.mobile} {
    display: inline-block;
  }
`;

const StyledNav = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 1000px;
    height: 4rem;
    margin: 0 auto;
    box-sizing: border-box;
`;

const NavButtonWrapper = styled.div`
  display: none;

  ${devices.tablet} {
    display: inline-flex;
    height: 100%;
  }
`;

const NavButton = styled.div`
  width: 3rem;
  height: 3rem;
  margin: ${margins.xs};
  margin-left: ${margins.lg};
  display: inline-block;
  background: url(${(props) => props && props.icon}) center no-repeat;
  cursor: pointer;
`;

const StyledLink = styled(Link)`
  display: block;
  font-size: ${fontSizes.md};
  color: ${colors.black};
  text-decoration: none;
  margin: auto 0 auto ${margins.sm};
`;

const HeaderNavLink = styled(StyledLink)`
  display: none;

  ${devices.mobile} {
    display: inline-block;
  }
`;

const BurgerBtn = styled.button`
  width: 3rem;
  height: 3rem;
  margin: ${margins.xs};
  float: right;
  background: url(${menuIcon}) center no-repeat;

  ${devices.tablet} {
    display: none;
  }
`;

const DropDown = styled.div`
  position: absolute;
  right: 0;
  top: 4rem;
  padding: ${paddings.sm};
  background: ${colors.lightGrey};
  z-index: ${zIndexes.sideBar};
  display: none;

  ${devices.tablet} {
    display: block;
  }

  @media (min-width: 1000px) {
    right: calc((100% - 1000px) / 2);
  }
`;

const MobileMenu = styled.div`
  width: 100%;
  position: absolute;
  top: 4rem;
  padding: ${paddings.sm};
  background: ${colors.lightGrey};
  z-index: ${zIndexes.sideBar};

  ${devices.tablet} {
    display: none;
  }
`;

const Nav = () => {
  const navigate = useNavigate();
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { setIsOpen } = useContext(ModalContext);

  return (
    <NavContainer>
      <StyledNav>
      <Logo>
        <LogoImage />
        <Brand>Brand</Brand>
      </Logo>
      <NavButtonWrapper>
        <HeaderNavLink to="/">Home</HeaderNavLink>
        <HeaderNavLink to="/all-posts">All Posts</HeaderNavLink>
        <HeaderNavLink to="/create">Create Post</HeaderNavLink>
        <NavButton icon={userIcon} onClick={() => setIsDropdownOpen(!isDropdownOpen)} />
      </NavButtonWrapper>
      <BurgerBtn onClick={() => setIsSideBarOpen(!isSideBarOpen)} />
      {isDropdownOpen && (
        <DropDown>
          <StyledLink to="/my-posts">My posts</StyledLink>
          <StyledLink to="/auth" onClick={() => setIsOpen(true)}>Log in / Register</StyledLink>
        </DropDown>
      )}
      {isSideBarOpen && (
        <MobileMenu>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/all-posts">All posts</StyledLink>
          <StyledLink to="/my-posts">My posts</StyledLink>
          <StyledLink to="/create">Create a post</StyledLink>
          <StyledLink to="/auth" onClick={() => setIsOpen(true)}>Log in / Register</StyledLink>
        </MobileMenu>
      )}
    </StyledNav>
    </NavContainer>
  )
};

export default Nav;