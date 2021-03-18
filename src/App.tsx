import { ApolloProvider } from '@apollo/client';
import React from 'react';
import styled from 'styled-components';
import { ModalProvider } from 'styled-react-modal';

import client from './graphql';
import Tasks from 'components/Tasks';
import theme from 'theme';

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <ModalProvider>
        <Container>
          <Tasks />
        </Container>
      </ModalProvider>
    </ApolloProvider>
  );
};

const Container = styled.div`
  padding: ${theme.spacer[5]};
  display: flex;
  flex: 1;
  font-size: calc(10px + 2vmin);
  background-color: ${theme.colors.blue.darkBlue};
  color: ${theme.colors.white.default};
`;

export default App;
