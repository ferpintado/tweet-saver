import jsonp from 'jsonp';
import _ from 'lodash';
import React, { useCallback, useState } from 'react';
import SearchInput from './SearchInput';
import SearchResults from './SearchResults';

export default function SearchTweets() {
  const [results, setResults] = useState([]);
  const [uiConfig, setUiConfig] = useState({ loading: false, error: false });
  const debounceOnChange = useCallback(_.debounce(onChange, 400), []);

  function onChange(value: string) {
    if (!value) {
      setUiConfig({ loading: false, error: false });
      setResults([]);
      return;
    }

    setUiConfig({ ...uiConfig, loading: true });
    jsonp(`http://tweetsaver.herokuapp.com/?q=${value}`, undefined, (err, data) => {
      if (err) {
        setUiConfig({ ...uiConfig, loading: false, error: true });
      } else {
        console.log(data);
        setUiConfig({ ...uiConfig, loading: false, error: true });
        setResults(data.tweets);
      }
    });
  }

  return (
    <>
      <SearchInput onChange={debounceOnChange} />
      <SearchResults loading={uiConfig.loading} error={uiConfig.error} results={results} />
    </>
  );
}
