import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import throttle from "lodash/throttle";
import BottomNav from "../../components/BottomNav";
import Overlay from "../../components/Overlay/Overlay";
import { Flex } from "../../components/Flex";
import Footer from "../../components/Footer";
import { Box } from "../../components/Box";
import MenuItems from "../../components/MenuItems/MenuItems";
import { SubMenuItems } from "../../components/SubMenuItems";
import CakePrice from "../../components/CakePrice/CakePrice";
import { useMatchBreakpoints } from "../../hooks";
import Logo from "./Logo";
import Panel from "./Panel";
import UserBlock from "./UserBlock";
import { NavProps } from "./types";
import { MENU_HEIGHT, MOBILE_MENU_HEIGHT } from "./config";
import Avatar from "./Avatar";

const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;

const StyledNav = styled.nav<{ showMenu: boolean }>`
  position: fixed;
  top: ${({ showMenu }) => (showMenu ? 0 : `-${MENU_HEIGHT}px`)};
  left: 0;
  transition: top 0.2s;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 8px;
  padding-right: 16px;
  width: 100%;
  height: ${MENU_HEIGHT}px;
  // background-color: ${({ theme }) => theme.nav.background};
  // background-color: #fea726;
  background-color: transparent;
  border-bottom: solid 2px rgba(133, 133, 133, 0.1);
  z-index: 20;
  transform: translate3d(0, 0, 0);
  @media (min-width: 992px) {
    flex: 0 0 auto;
    padding: 0px calc(1/12*100%);
  }
  @media (max-width: 991px) {
    flex: 1 1 0;
    max-width: 100%;
  }
`;

const BodyWrapper = styled.div`
  position: relative;
  display: flex;
`;

const Inner = styled.div<{ isPushed: boolean; showMenu: boolean }>`
  flex-grow: 1;
  margin-top: ${({ showMenu }) => (showMenu ? `${MENU_HEIGHT}px` : 0)};
  transition: margin-top 0.2s;
  transform: translate3d(0, 0, 0);
`;

const MobileOnlyOverlay = styled(Overlay)`
  position: fixed;
  height: 100%;

  ${({ theme }) => theme.mediaQueries.nav} {
    display: none;
  }
`;

const StyledFlex = styled(Flex)`
  width: 100%;
  display: flex;
  justify-content: space-between;
`
const StyledMenuItems = styled(MenuItems)`
  align-items: center;
`

const StyledMenuBar = styled.div`
  display: flex;
  align-items: center;
  column-gap: 30px;
`
const Menu: React.FC<NavProps> = ({
  account,
  login,
  logout,
  isDark,
  toggleTheme,
  langs,
  setLang,
  currentLang,
  cakePriceUsd,
  links,
  footerLinks,
  priceLink,
  buyCakeLabel,
  profile,
  children,
}) => {
  const { isXl } = useMatchBreakpoints();
  const isMobile = isXl === false;
  const [isPushed, setIsPushed] = useState(!isMobile);
  const [showMenu, setShowMenu] = useState(true);
  const refPrevOffset = useRef(window.pageYOffset);

  useEffect(() => {
    const handleScroll = () => {
      const currentOffset = window.pageYOffset;
      const isBottomOfPage = window.document.body.clientHeight === currentOffset + window.innerHeight;
      const isTopOfPage = currentOffset === 0;
      // Always show the menu when user reach the top
      if (isTopOfPage) {
        setShowMenu(true);
      }
      // Avoid triggering anything at the bottom because of layout shift
      else if (!isBottomOfPage) {
        if (currentOffset < refPrevOffset.current) {
          // Has scroll up
          setShowMenu(true);
        } else {
          // Has scroll down
          setShowMenu(false);
        }
      }
      refPrevOffset.current = currentOffset;
    };
    const throttledHandleScroll = throttle(handleScroll, 200);

    window.addEventListener("scroll", throttledHandleScroll);
    return () => {
      window.removeEventListener("scroll", throttledHandleScroll);
    };
  }, []);

  // Find the home link if provided
  const homeLink = links.find((link) => link.label === "Home");

  return (
    <Wrapper>
      <StyledNav showMenu={showMenu}>
        <StyledFlex>
          <Logo isDark={isDark} href={homeLink?.href ?? "/"} />
          <StyledMenuBar>
          {!isMobile && <StyledMenuItems items={links} ml="24px" />}
          <UserBlock account={account} login={login} logout={logout} />
          </StyledMenuBar>
        </StyledFlex>
        {/* <Flex alignItems="center">
          {!isMobile && (
            <Box mr="12px">
              <CakePrice cakePriceUsd={cakePriceUsd} />
            </Box>
          )}
          <UserBlock account={account} login={login} logout={logout} />
        </Flex> */}
      </StyledNav>
      {/* {links && <SubMenuItems items={links} mt={`${MENU_HEIGHT + 1}px`} activeItem={activeItem} />} */}
      <BodyWrapper>
        <Inner isPushed={isPushed} showMenu={showMenu}>
          {children}
          {/* <Footer
            items={footerLinks}
            isDark={isDark}
            toggleTheme={toggleTheme}
            langs={langs}
            setLang={setLang}
            currentLang={currentLang}
            cakePriceUsd={cakePriceUsd}
            buyCakeLabel={buyCakeLabel}
            mb={[`${MOBILE_MENU_HEIGHT}px`, null, "0px"]}
          /> */}
        </Inner>
        {isMobile && <BottomNav items={links} />}
      </BodyWrapper>
    </Wrapper>
  );
};

export default Menu;
