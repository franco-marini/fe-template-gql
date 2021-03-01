import React, { FC } from 'react';

import { Form, SearchButton, SearchIcon, Input } from './SearchBar-styles';

const SearchBar: FC = () => {
  return (
    <Form>
      <Input />
      <SearchButton>
        <SearchIcon />
      </SearchButton>
    </Form>
  );
};

export default SearchBar;
