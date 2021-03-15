import styled from 'styled-components';
import { Edit, Delete } from '@styled-icons/material';

import theme from 'theme';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: ${theme.spacer[3]};
  margin-top: ${theme.spacer[2]};
  margin-bottom: ${theme.spacer[2]};
  color: ${theme.colors.blue.darkBlue};
  background-color: ${theme.colors.white.default};
  border-radius: ${theme.borderRadius.default};
`;

export const Header = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h2`
  text-align: left;
  font-size: ${theme.fontSize.md};
  font-weight: bold;
`;

export const Icons = styled.div`
  display: flex;
`;

export const EditIcon = styled(Edit)`
  color: ${theme.colors.blue.darkBlue};
  height: ${theme.fontSize.md};
`;

export const DeleteIcon = styled(Delete)`
  color: ${theme.colors.blue.darkBlue};
  height: ${theme.fontSize.md};
`;

export const Description = styled.p`
  text-align: left;
  font-size: ${theme.fontSize.xsm};
`;
