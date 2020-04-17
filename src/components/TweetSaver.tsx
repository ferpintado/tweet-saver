import React from 'react';
import SearchTweets from './common/tweet-saver/SearchTweets';

export default function TweetSaver() {
  return (
    <div className="row">
      <div className="col-md">
        <SearchTweets />
      </div>
      <div className="col-md">Test 2</div>
    </div>
  );
}
