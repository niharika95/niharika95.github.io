import styled from 'styled-components';

const Gutter = styled.div`
  padding-left: 100px;
  padding-right: 100px;

  @media screen and (max-width: 600px) {
    padding-left: 12px;
    padding-right: 12px;
  }
`;

export default Gutter;
