import _ from 'lodash';
import React, { FunctionComponent } from 'react';

interface SearchInputProps {
  onChange: ((value: string) => void) & _.Cancelable;
}

const SearchInput: FunctionComponent<SearchInputProps> = ({ onChange }) => (
  <input
    placeholder="Search tweets..."
    className="form-control mb-2"
    onChange={(e) => onChange(e.target.value)}
  />
);

export default SearchInput;
