import { DocumentNode, gql } from '@apollo/client';

export const getTask = ({ filter, schema }: { filter?: string; schema: string }): DocumentNode => gql`
  query getTasks {
    tasks ${filter ? `(filter: "${filter}")` : ''} {
      ${schema}
    }
  }
`;
