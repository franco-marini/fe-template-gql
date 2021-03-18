import React, { FC, useState } from 'react';

import { Form, SearchButton, SearchIcon, Input } from './SearchBar-styles';

interface Props {
  setSearchValue: (v: string) => void;
}

const SearchBar: FC<Props> = ({ setSearchValue }: Props) => {
  const [value, setValue] = useState('');

  return (
    <Form>
      <Input
        value={value}
        onChange={e => {
          setValue(e.target.value);
          if (e.target.value === '') {
            setSearchValue('');
          }
        }}
      />
      <SearchButton
        onClick={e => {
          e.preventDefault();
          setSearchValue(value);
        }}
      >
        <SearchIcon />
      </SearchButton>
    </Form>
  );
};

export default SearchBar;
