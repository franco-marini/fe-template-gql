import React, { FC } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

import theme from '../../theme';
import { Container, Title, Description, Header, Icons } from './Card-styles';

interface Props {
  title: string;
  description: string;
}

const Card: FC<Props> = ({ title, description }: Props) => {
  return (
    <Container>
      <Header>
        <Title>{title}</Title>
        <Icons>
          <EditIcon fontSize='small' color={theme.colors.blue.darkBlue} />
          <DeleteIcon fontSize='small' color={theme.colors.blue.darkBlue} />
        </Icons>
      </Header>
      <Description>{description}</Description>
    </Container>
  );
};

export default Card;
