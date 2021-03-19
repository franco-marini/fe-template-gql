import styled from 'styled-components';
import { Add } from '@styled-icons/material';

import theme from 'theme';

export const Container = styled.div`
  background-color: ${theme.colors.white.default};
  border-radius: ${theme.borderRadius.default};
  overflow: hidden;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${theme.spacer[2]} 0;
  color: ${theme.colors.white.default};
  background-color: ${theme.colors.gray[200]};
`;

export const Title = styled.h1`
  margin: 0;
  font-size: ${theme.fontSize.lg};
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: ${theme.spacer[5]};
`;

export const InputContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
`;

export const Input = styled.input.attrs({
  type: 'text',
})<{ hasError: boolean }>`
  padding: ${theme.spacer[2]} ${theme.spacer[1]};
  margin: ${({ hasError }) => (hasError ? `0 0 ${theme.spacer[2]} 0` : `0 0 ${theme.spacer[4]} 0`)};
  font-size: ${theme.fontSize.md};
  color: ${theme.colors.gray[200]};
  border: ${({ hasError }) =>
    hasError ? `1px solid ${theme.colors.red[100]}` : `1px solid ${theme.colors.gray[200]}`};
  border-radius: ${theme.borderRadius.default};
`;

export const Error = styled.p`
  margin: 0 0 ${theme.spacer[2]} 0;
  font-size: ${theme.fontSize.sm};
  color: ${theme.colors.red[100]};
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  justify-self: flex-end;
  padding: ${theme.spacer[2]};
  border: 1px solid ${theme.colors.gray[200]};
  border-radius: ${theme.borderRadius.default};
  color: ${theme.colors.gray[200]};
  cursor: pointer;
  :hover {
    background-color: ${theme.colors.gray[200]};
    color: ${theme.colors.white.default};
  }
  :disabled {
    background-color: ${theme.colors.gray[100]};
    border: 1px solid ${theme.colors.gray[100]};
    color: ${theme.colors.white.default};
  }
`;

export const ButtonText = styled.p`
  margin: 0;
  font-size: ${theme.fontSize.md};
`;

export const AddIcon = styled(Add)`
  height: ${theme.fontSize.lg};
`;
