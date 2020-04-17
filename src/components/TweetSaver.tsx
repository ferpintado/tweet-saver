import React from 'react';
import SavedTweets from './tweet-saver/SavedTweets';
import SearchTweets from './tweet-saver/SearchTweets';

export default function TweetSaver() {
  return (
    <div className="row">
      <div className="col-md">
        <SearchTweets />
      </div>
      <div className="col-md">
        <SavedTweets />
      </div>
    </div>
  );
}
