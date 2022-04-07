import React from 'react';
import styled from 'styled-components';
import { Icon } from '@iconify/react';

function Footer() {
  return (
    <FooterContainer>
      <P>
        <Icon fontSize={20} icon="ci:window-code-block" color="rgb(16, 96, 102)" />
        {' '}
        by
        <Link href="https://dkaushik95.github.io/" target="_blank">Dishant</Link>
      </P>
    </FooterContainer>
  );
}

const FooterContainer = styled.div`
  background-color: #DBE7E8;
  /* border-top: 1px solid rgb(16, 96, 102); */
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 100px;
`;

const P = styled.p`
  display: flex;
  /* justify-content: center; */
  align-items: center;
  column-gap: 10px;
  font-size: 15px;
  font-weight: 300;
  margin: 0;
`;

const Link = styled.a`
  color: black;
  text-decoration: none;
  :hover{
    text-decoration: underline;
  }
`;

export default Footer;
