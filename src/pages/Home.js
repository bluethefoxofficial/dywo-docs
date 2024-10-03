import React from 'react';
import styled from 'styled-components';

const HomeWrapper = styled.div`
  h1 {
    color: ${props => props.theme.colors.primary};
  }
`;

function Home() {
  return (
    <HomeWrapper>
      <h1>Welcome to Dywo Documentation</h1>
      <p>Dywo is a powerful CLI tool for creating and managing single-page applications.</p>
    </HomeWrapper>
  );
}

export default Home;