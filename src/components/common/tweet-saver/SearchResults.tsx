import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

interface SearchResultsProps {
  loading: boolean;
  error: boolean;
  results: never[];
}

const StyledLoading = styled.p`
  color: #333;
  font-style: italic;
`;

const StyledError = styled.p`
  color: #ff0000;
  font-weight: bold;
`;

const SearchResults: FunctionComponent<SearchResultsProps> = ({ loading, error, results }) => {
  if (loading) {
    return <StyledLoading>Loading...</StyledLoading>;
  }

  if (error) {
    return <StyledError>API Error</StyledError>;
  }

  return <></>;
};

export default SearchResults;
