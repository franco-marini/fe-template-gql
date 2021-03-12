import { useQuery } from '@apollo/client';
import React, { FC, Fragment } from 'react';

import Card from '@components/Card';
import SearchBar from '@components/SearchBar';
import { getTask } from '@queries/task-queries';
import { List } from './Tasks-styles';

const Tasks: FC = () => {
  const GET_TASKS = getTask({ schema: 'title, id, description' });
  const { loading, error, data } = useQuery(GET_TASKS);

  if (error) return <span>Oops! Something went wrong: {error.message}</span>;
  if (loading) return <span>Is loading please wait...</span>;

  return (
    <Fragment>
      <SearchBar />
      <List>
        {data.tasks.map(({ title, id, description }: { title: string, description: string, id: string }) => (
          <Card title={title} description={description} key={id} />
        ))}
      </List>
    </Fragment>
  );
};

export default Tasks;
