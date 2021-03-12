import { ApolloProvider } from '@apollo/client';
import React from 'react';
import styled from 'styled-components';

import Tasks from '@components/Tasks';
import theme from '@theme';
import client from './graphql';

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <Container>
        <Tasks />
      </Container>
    </ApolloProvider>
  );
};

const Container = styled.div`
  height: 100vh;
  padding: ${theme.spacer[5]};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  font-size: calc(10px + 2vmin);
  background-color: ${theme.colors.blue.darkBlue};
  color: ${theme.colors.white.default};
`;

export default App;
