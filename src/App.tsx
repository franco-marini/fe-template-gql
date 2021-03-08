import React from 'react';
import styled from 'styled-components';
import { ApolloProvider } from '@apollo/client';

import SearchBar from './components/SearchBar';
import Tasks from './components/Tasks';
import client from './graphql';
import theme from './theme';

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <Container>
        <SearchBar />
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
