import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import TweetList from './TweetList';

interface SearchResultsProps {
  loading: boolean;
  error: boolean;
  results: any[];
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

  if (results.length) {
    return <TweetList tweets={results} draggable={true} />;
  }

  return <></>;
};

export default SearchResults;
