import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import convertDate from '../../utils/date';
import convertUsernameToLink from '../../utils/text';
import DraggableItem from '../common/DraggableItem';

interface SingleTweetProps {
  tweet: any;
  draggable?: boolean | false;
}

interface InnerTweetProps {
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

const StyledDraggable = styled.div`
  cursor: move;

  &.react-draggable-dragging {
    box-shadow: -1px -1px 10px 0px #333;
    z-index: 2;
  }
`;

const InnerTweet: FunctionComponent<InnerTweetProps> = ({ tweet }) => (
  <div className="list-group-item col-md-12">
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
  </div>
);

const SingleTweet: FunctionComponent<SingleTweetProps> = ({ tweet, draggable }) => {
  if (!draggable) {
    return <InnerTweet tweet={tweet} />;
  }
  return (
    <DraggableItem tweet={tweet}>
      <StyledDraggable>
        <InnerTweet tweet={tweet} />
      </StyledDraggable>
    </DraggableItem>
  );
};

export default SingleTweet;
