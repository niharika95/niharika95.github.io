import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link as RLink } from 'react-router-dom';
import { HashLink as RHashLink } from 'react-router-hash-link';
import { Icon } from '@iconify/react';
import niharikaLogo from '../../assets/images/niharikaLogo.png';

const Link = styled(RLink)`
  font-size: 20px;
  text-decoration: none;
  color: black;
`;

const HashLink = styled(RHashLink)`
  font-size: 20px;
  text-decoration: none;
  color: black;
`;

const links = [
  {
    href: '/#projects',
    label: 'Projects',
    component: HashLink,
  },
  {
    href: '/resume',
    label: 'Resume',
    component: Link,
  },
  {
    href: '/#about',
    label: 'About',
    component: HashLink,
  },
];

function Header() {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const handleMediaQueryChange = (mediaQuery) => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 600px)');
    mediaQuery.addEventListener('change', handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);

  const toggleNav = () => setIsNavVisible(!isNavVisible);

  return (
    <HeaderContainer>
      <HashLink smooth to="/#">
        <Logo src={niharikaLogo} />
      </HashLink>
      {(!isSmallScreen || isNavVisible) && (
        <Links>
          {links.map(({ href, label, component: Element }) => (
            <Element smooth to={href} key={label}>{label}</Element>
          ))}
        </Links>
      )}
      <BurgerIcon onClick={toggleNav} color="#000000" icon="icon-park:hamburger-button" />
    </HeaderContainer>
  );
}

const BurgerIcon = styled(Icon)`
  display: none;
  grid-area: burger;
  @media screen and (max-width: 600px) {
    display: block;
    justify-self: right;
    align-self: center;
    font-size: 30px;
  }
`;

const HeaderContainer = styled.div`
  display: grid;
  grid-template-areas: "logo nav";
  padding-left: 100px;
  padding-right: 100px;
  position: fixed;
  top:0;
  background: white;
  width: 100vw;
  border-bottom: 1px solid #cecece;
  box-sizing: border-box;
  padding-top: 8px;
  padding-bottom: 8px;
  /* display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 100px;
  padding-right: 100px;
  padding-top: 8px;
  padding-bottom: 8px;
  background: white;
  box-shadow: 0px 6px 49px -35px rgba(0,0,0,0.63);
  position: fixed;
  width: 100vw;
  top:0;
  box-sizing: border-box;

  @media screen and (max-width: 600px) {
    padding-left: 12px;
    padding-right: 12px;
  } */

  @media screen and (max-width: 600px) {
    padding-left: 12px;
    padding-right: 12px;
    grid-template-areas: "logo burger" "nav nav";
  }
`;

const Logo = styled.img`
  height: 56px;
  grid-area: logo;
`;

const Links = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  justify-items: end;
  align-items: center;
  grid-area: nav;
  @media screen and (max-width: 600px) {
    grid-template-columns: none;
    grid-template-rows: auto auto auto;
    grid-row-gap: 40px;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  /* grid-gap: 60px; */
`;

export default Header;
