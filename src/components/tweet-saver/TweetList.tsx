import React, { FunctionComponent } from 'react';
import SingleTweet from './SingleTweet';

interface TweetListProps {
  tweets: any[];
  draggable?: boolean | false;
}

const TweetList: FunctionComponent<TweetListProps> = ({ tweets, draggable }) => {
  return (
    <>
      <div className="list-group mt-3">
        {tweets.map((tweet) => {
          return <SingleTweet tweet={tweet} key={tweet.idStr} draggable={draggable} />;
        })}
      </div>
    </>
  );
};

export default TweetList;
