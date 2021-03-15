import React, { FC, useState } from 'react';
import { useQuery } from '@apollo/client';

import { List, Container } from './Tasks-styles';
import Card from 'components/Card';
import SearchBar from 'components/SearchBar';
import { getTask } from 'graphql/queries/task-queries';

const Tasks: FC = () => {
  const [searchTitle, setSearchTitle] = useState('');
  const GET_TASKS = getTask({
    schema: 'title, id, description',
    filter: searchTitle,
  });
  const { loading, error, data } = useQuery(GET_TASKS);

  if (error) return <span>Oops! Something went wrong: {error.message}</span>;

  return (
    <Container>
      <SearchBar setSearchValue={setSearchTitle} />
      {loading ? (
        <span>Is loading please wait...</span>
      ) : (
        <List>
          {data.tasks.map(({ title, id, description }: { title: string, description: string, id: string }) => (
            <Card title={title} description={description} key={id} />
          ))}
        </List>
      )}
    </Container>
  );
};

export default Tasks;
