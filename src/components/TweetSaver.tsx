import React, { useState } from 'react';
import useLocalStorageState from '../hooks/useLocalStorageState';
import SaverContext from './TweetSaver.context';
import SavedTweets from './tweet-saver/SavedTweets';
import SearchTweets from './tweet-saver/SearchTweets';

export default function TweetSaver() {
  const [dragging, setDragging] = useState(false);
  const [dropzone, setDropzone] = useState({ x: 0, y: 0 });
  const [savedList, setSavedList] = useLocalStorageState('tweets', []);
  const toggleDragging = () => setDragging(!dragging);
  const updateSavedList = (newList: any): void => setSavedList(newList);
  const updateDropzone = (newDropzone: any): void => setDropzone(newDropzone);

  return (
    <SaverContext.Provider
      value={{
        dragging,
        savedList,
        updateSavedList,
        toggleDragging,
        dropzone,
        updateDropzone,
      }}
    >
      <div className="row">
        <div className="col-md">
          <SearchTweets />
        </div>
        <div className={`col-md ${dragging && 'border border-dark bg-secondary'}`}>
          <SavedTweets />
        </div>
      </div>
    </SaverContext.Provider>
  );
}
