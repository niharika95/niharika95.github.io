import { Icon } from '@iconify/react';
import React from 'react';
import styled from 'styled-components';
import { Gutter } from '../../common';
import resumePNG from '../../assets/documents/resume.png';
import resumePDF from '../../assets/documents/resume.pdf';

function Resume() {
  return (
    <ResumeContainer>
      <DownloadButton href={resumePDF} download="Resume-NiharikaDalal.pdf">
        <Icon icon="charm:download" />
        Download
      </DownloadButton>
      <ResumeImage src={resumePNG} alt="resume" />
    </ResumeContainer>
  );
}

const ResumeContainer = styled(Gutter)`
  margin-top: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 100px;
  @media screen and (max-width: 600px) {
    margin-top: 100px;
  }
`;

const DownloadButton = styled.a`
  display: flex;
  align-items: center;
  column-gap: 8px;
  font-weight: 400;
  font-size: 20px;
  background-color: #106066;
  color: #ffffff;
  padding: 8px 16px 8px 16px;
  border-radius: 4px;
  margin-bottom: 20px;
  float: right;
  cursor: pointer;
  text-decoration: none;
`;

const ResumeImage = styled.img`
  width: 70%;
  border: 2px solid #106066;
  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

export default Resume;
