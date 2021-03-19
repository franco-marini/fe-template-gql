import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';

import {
  Form,
  Button,
  AddIcon,
  Input,
  ButtonText,
  InputContainer,
  Title,
  Container,
  Header,
  Error,
} from './AddModal-styles';

interface Props {
  buttonText: 'Edit' | 'Add';
  task?: { title: string; description: string };
}

interface FormInputs {
  title: string;
  description: string;
}

const AddModal: FC<Props> = ({ buttonText, task }: Props) => {
  const { register, handleSubmit, errors, formState } = useForm<FormInputs>({
    mode: 'onTouched',
    defaultValues: {
      title: task?.title || '',
      description: task?.description || '',
    },
    criteriaMode: 'all',
  });
  const { isDirty, isValid } = formState;
  const validateForm = !isDirty || !isValid || Object.keys(errors).length > 0 ? true : false;

  return (
    <Container>
      <Header>
        <Title>{buttonText === 'Add' ? 'Create a new task' : `Edit the task ${task?.title}`}</Title>
      </Header>
      <Form onSubmit={handleSubmit(d => console.log(d))}>
        <InputContainer>
          <Input
            name='title'
            placeholder='Title'
            ref={register({
              required: 'This is required',
            })}
            hasError={!!errors.title?.message}
          />
          <ErrorMessage
            errors={errors}
            name='title'
            render={({ messages }) =>
              (messages && Object.entries(messages).map(([type, message]) => <Error key={type}>{message}</Error>)) ||
              null
            }
          />
          <Input
            name='description'
            placeholder='Description'
            ref={register({
              required: 'This is required',
            })}
            hasError={!!errors.description?.message}
          />
          <ErrorMessage
            errors={errors}
            name='description'
            render={({ messages }) =>
              (messages && Object.entries(messages).map(([type, message]) => <Error key={type}>{message}</Error>)) ||
              null
            }
          />
        </InputContainer>
        <Button disabled={validateForm}>
          <ButtonText>{buttonText}</ButtonText>
          {buttonText === 'Add' && <AddIcon />}
        </Button>
      </Form>
    </Container>
  );
};

export default AddModal;
