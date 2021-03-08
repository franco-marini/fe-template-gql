import { DocumentNode, gql } from '@apollo/client';

interface Task {
  title: string;
  description: string;
}

export const createTask = ({ task, schema }: { task: Task; schema: string }): DocumentNode => gql`
  mutation createTasks {
    createTask(title: "${task.title}", description: "${task.description}") {
      ${schema}
    }
  }
`;

export const updateTask = ({ task, id, schema }: { task: Task; id: string; schema: string }): DocumentNode => gql`
  mutation updateTask {
    updateTask(id: "${id}", title: "${task.title}", description: "${task.description}") {
      ${schema}
    }
  }
`;

export const deleteTask = ({ id, schema }: { id: string; schema: string }): DocumentNode => gql`
  mutation deleteTask(id: "${id}") {
    deleteTask(id: "${id}") {
      ${schema}
    }
  }
`;
