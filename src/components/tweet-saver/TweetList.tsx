import React, { FunctionComponent } from 'react';
import SingleTweet from './SingleTweet';
interface TweetListProps {
  tweets: any[];
}
const TweetList: FunctionComponent<TweetListProps> = ({ tweets }) => {
  console.log(tweets);
  return (
    <ul className="list-group mt-3">
      {tweets.map((tweet) => (
        <SingleTweet tweet={tweet} key={tweet.id} />
      ))}
    </ul>
  );
};

export default TweetList;
