import styled from 'styled-components';

import theme from '../../theme';

export const Container = styled.div`
  display: flex;
  width: 25%;
  flex-direction: column;
  justify-content: center;
  padding: ${theme.spacer[3]};
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

export const Description = styled.p`
  text-align: left;
  font-size: ${theme.fontSize.xsm};
`;
