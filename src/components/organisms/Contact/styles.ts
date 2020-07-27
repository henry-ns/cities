import styled from 'styled-components';

import { rem } from 'polished';

import SectionContainer from '@templates/SectionContainer';

export const Container = styled(SectionContainer)``;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  padding: 104px 0;
  max-width: 1320px;
  margin: 0 auto;
`;

export const MapContainer = styled.div`
  border: 8px solid ${({ theme }) => theme.colors.secondary.active};
`;

export const Card = styled.div`
  width: 100%;
  max-width: 450px;

  background: ${({ theme }) => theme.colors.secondary.text};
  padding: 48px;

  letter-spacing: 0.15em;
  line-height: 175%;

  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
  border-radius: 4px;

  h2 {
    margin-bottom: 24px;
    font-size: ${rem('20px')};
  }

  h2:not(:first-of-type) {
    margin-top: 40px;
  }

  p,
  li {
    font-size: ${rem('16px')};
  }
`;
