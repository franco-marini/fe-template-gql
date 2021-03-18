import React, { FC } from 'react';

import { Container, Title, Description, Header, Icons, EditIcon, DeleteIcon } from './Card-styles';

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
          <EditIcon />
          <DeleteIcon />
        </Icons>
      </Header>
      <Description>{description}</Description>
    </Container>
  );
};

export default Card;
