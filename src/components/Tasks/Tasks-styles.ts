import styled from 'styled-components';
import { AddCircleOutline } from '@styled-icons/material';

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

export const TopContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: ${theme.spacer[2]};
`;

export const AddButton = styled.button`
  align-content: center;
  margin-left: ${theme.spacer[3]};
  color: ${theme.colors.white.default};
  font-size: ${theme.fontSize.lg};
  cursor: pointer;
`;

export const AddIcon = styled(AddCircleOutline)`
  color: ${theme.colors.white.default};
  height: ${theme.fontSize.xlg};
`;
