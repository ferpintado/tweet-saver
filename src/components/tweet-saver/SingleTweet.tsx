import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import convertDate from '../../utils/date';
import convertUsernameToLink from '../../utils/text';

interface SingleTweetProps {
  tweet: any;
}

const StyledUserName = styled.span`
  font-weight: bold;
  margin-right: 10px;
`;

const StyledUserScreenName = styled.span`
  font-style: italic;
`;

const StyledUserDate = styled.span`
  float: right;
  font-size: 14px;
`;

const SingleTweet: FunctionComponent<SingleTweetProps> = ({ tweet }) => {
  return (
    <li className="list-group-item col-md-12">
      <div className="row">
        <div className="col-md-1">
          <img src={tweet.user.profileImageUrlHttps} alt={tweet.user.name} />
        </div>
        <div className="col-md-11">
          <div>
            <StyledUserName>{tweet.user.name}</StyledUserName>
            <StyledUserScreenName>@{tweet.user.screenName}</StyledUserScreenName>
            <StyledUserDate>{convertDate(tweet.createdAt)}</StyledUserDate>
          </div>
          <p dangerouslySetInnerHTML={{ __html: convertUsernameToLink(tweet.text) }} />
        </div>
      </div>
    </li>
  );
};

export default SingleTweet;
