import React from 'react';
import styled from 'styled-components';
import { Link as RLink } from 'react-router-dom';
import { HashLink as RHashLink } from 'react-router-hash-link';
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
  return (
    <HeaderContainer>
      <HashLink smooth to="/#">
        <Logo src={niharikaLogo} />
      </HashLink>
      <Links>
        {links.map(({ href, label, component: Element }) => (
          <Element smooth to={href} key={label}>{label}</Element>
        ))}
      </Links>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  display: flex;
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
`;

const Logo = styled.img`
  height: 56px;
`;

const Links = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 60px;
`;

export default Header;
