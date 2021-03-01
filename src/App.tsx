import React from 'react';
import styled from 'styled-components';

import Card from './components/Card';
import theme from './theme';

const App: React.FC = () => {
  return (
    <Container>
      <Card title='Hello' description='This is my new card' />
      <Card title='Bye' description='See you soon' />
    </Container>
  );
};

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  font-size: calc(10px + 2vmin);
  background-color: ${theme.colors.blue.darkBlue};
  color: ${theme.colors.white.default};
`;

export default App;
