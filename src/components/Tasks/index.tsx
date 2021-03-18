import React, { FC, useState } from 'react';
import { useQuery } from '@apollo/client';

import { List, Container, AddButton, AddIcon, TopContainer } from './Tasks-styles';
import Card from 'components/Card';
import Modal from 'components/Modal';
import SearchBar from 'components/SearchBar';
import { getTask } from 'graphql/queries/task-queries';

const Tasks: FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [searchTitle, setSearchTitle] = useState('');

  const GET_TASKS = getTask({
    schema: 'title, id, description',
    filter: searchTitle,
  });
  const { loading, error, data } = useQuery(GET_TASKS);

  if (error) return <span>Oops! Something went wrong: {error.message}</span>;

  return (
    <Container>
      <Modal type='add' isOpen={showModal} closeModal={() => setShowModal(false)} />
      <TopContainer>
        <SearchBar setSearchValue={setSearchTitle} />
        <AddButton onClick={() => setShowModal(true)}>
          Add new task <AddIcon />
        </AddButton>
      </TopContainer>
      {loading ? (
        <span>Is loading please wait...</span>
      ) : (
        <List>
          {data.tasks.map(({ title, id, description }: { title: string; description: string; id: string }) => (
            <Card title={title} description={description} key={id} />
          ))}
        </List>
      )}
    </Container>
  );
};

export default Tasks;
