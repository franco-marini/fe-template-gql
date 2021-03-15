import styled from 'styled-components';

import theme from 'theme';

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-grow: 1;
  flex-direction: column;
  align-items: center;
  padding: ${theme.spacer[2]};
`;

export const List = styled.ul`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  list-style-type: none;
  margin: ${theme.spacer[5]} 0 0 0;
  padding: 0;
`;
