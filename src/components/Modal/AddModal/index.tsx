import React, { FC, useState } from 'react';

import { Form, Button, AddIcon, Input, ButtonText, InputContainer, Title, Container, Header } from './AddModal-styles';

interface Props {
  buttonText: 'Edit' | 'Add';
  task?: { title: string; description: string };
}

const AddModal: FC<Props> = ({ buttonText, task }: Props) => {
  const [title, setTitle] = useState(task?.title || '');
  const [description, setDescription] = useState(task?.description || '');

  return (
    <Container>
      <Header>
        <Title>{buttonText === 'Add' ? 'Create a new task' : `Edit the task ${task?.title}`}</Title>
      </Header>
      <Form>
        <InputContainer>
          <Input
            name='title'
            value={title}
            placeholder='Title'
            onChange={e => {
              setTitle(e.target.value);
            }}
          />
          <Input
            name='description'
            value={description}
            placeholder='Description'
            onChange={e => {
              setDescription(e.target.value);
            }}
          />
        </InputContainer>
        <Button
          onClick={e => {
            e.preventDefault();
          }}
        >
          <ButtonText>{buttonText}</ButtonText>
          {buttonText === 'Add' && <AddIcon />}
        </Button>
      </Form>
    </Container>
  );
};

export default AddModal;
