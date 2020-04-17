import React, { useContext, useEffect, useRef } from 'react';
import SaverContext from '../TweetSaver.context';
import Header from '../common/Header.styled';
import TweetList from './TweetList';

const SavedTweets = () => {
  const refDropZone: any = useRef<HTMLDivElement>(null);
  const { savedList, updateDropzone } = useContext(SaverContext);

  useEffect(() => {
    updateDropzone({
      x: refDropZone.current.offsetParent.offsetLeft,
      y: refDropZone.current.offsetParent.offsetTop,
    });
  }, []);
  return (
    <>
      <Header className="mt-1" size={22}>
        Saved tweets ({savedList.length})
      </Header>
      <div ref={refDropZone}>
        {savedList.length ? (
          <TweetList tweets={savedList} />
        ) : (
          <p>Drag and Drop your tweet to save</p>
        )}
      </div>
    </>
  );
};

export default SavedTweets;
