import styled from 'styled-components';
import { Search } from '@styled-icons/material';

import theme from 'theme';

export const Form = styled.form`
  display: flex;
  min-width: 50%;
  flex-direction: row;
  justify-content: center;
  padding: ${theme.spacer[3]};
  background-color: ${theme.colors.blue.darkBlue};
  border: 1px solid ${theme.colors.white.default};
  border-radius: ${theme.borderRadius.default};
`;

export const Input = styled.input`
  flex: 10;
  border-right: 1px solid ${theme.colors.white.default};
  font-size: ${theme.fontSize.lg};
  color: ${theme.colors.white.default};
`;

export const SearchButton = styled.button`
  flex: 1;
  align-self: flex-end;
  cursor: pointer;
`;

export const SearchIcon = styled(Search)`
  color: ${theme.colors.white.default};
  height: ${theme.fontSize.lg};
`;
