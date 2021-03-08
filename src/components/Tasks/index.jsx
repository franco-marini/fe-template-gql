import React, { FC } from 'react';
import { useQuery } from '@apollo/client';

import { getTask } from '../../graphql/queries/task-queries';
import Card from '../Card';
import { List } from './Tasks-styles';

const Tasks: FC = () => {
  const GET_TASKS = getTask({ schema: 'title, id, description' });
  const { loading, error, data } = useQuery(GET_TASKS);

  if (error) return <span>Oops! Something went wrong: {error.message}</span>;
  if (loading) return <span>Is loading please wait...</span>;

  return (
    <List>
      {data.tasks.map(({ title, id, description }: { title: string, description: string, id: string }) => (
        <Card title={title} description={description} key={id} />
      ))}
    </List>
  );
};

export default Tasks;
