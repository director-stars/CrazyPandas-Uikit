import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { LogoIcon } from "../../components/Svg";
import Flex from "../../components/Flex/Flex";
import { HamburgerIcon, HamburgerCloseIcon, LogoIcon as LogoWithText } from "./icons";
import MenuButton from "./MenuButton";

interface Props {
  isPushed?: boolean;
  isDark: boolean;
  togglePush?: () => void;
  href: string;
}

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  .mobile-icon {
    width: 32px;
    ${({ theme }) => theme.mediaQueries.nav} {
      display: none;
    }
  }
  .desktop-icon {
    width: 48px;
    display: none;
    ${({ theme }) => theme.mediaQueries.nav} {
      display: block;
    }
  }
`;
const LogoText = styled.div`
  font-weight: 700;
  color: #fff;
  caret-color: #fff;
  font-size: 1.25rem;
  line-height: 1.5;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-family: berlin-sans-regular;
`;

const HeaderText = styled.div`

`;

const BottomText = styled.div`
  font-size: 0.75rem;
  line-height: 1;
  font-weight: 400;
  // background-image: url(/images/Rise-of-Shibas-.gif);
  // background-repeat: no-repeat;
  // background-size: contain;
  // height: 60px;
  // width: 200px;
`;

const Logo: React.FC<Props> = ({ isPushed, togglePush, isDark, href }) => {
  const isAbsoluteUrl = href.startsWith("http");
  const innerLogo = (
    <>
      <LogoIcon className="mobile-icon" />
      <LogoWithText className="desktop-icon" isDark={isDark} />
      <LogoText><HeaderText>ShibaGalaxy</HeaderText><BottomText>Rise of Shibas</BottomText></LogoText>
      {/* <LogoText><HeaderText>ShibaGalaxy</HeaderText><BottomText></BottomText></LogoText> */}
    </>
  );

  return (
    <Flex>
      {isAbsoluteUrl ? (
        <StyledLink as="a" href={href} aria-label="ShibaGalaxy home page">
          {innerLogo}
        </StyledLink>
      ) : (
        <StyledLink to={href} aria-label="ShibaGalaxy home page">
          {innerLogo}
        </StyledLink>
      )}
    </Flex>
  );
};

export default Logo;
