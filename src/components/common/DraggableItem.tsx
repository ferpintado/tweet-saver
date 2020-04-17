import React, { useContext, FunctionComponent } from 'react';
import Draggable from 'react-draggable';
import SaverContext from '../TweetSaver.context';

interface DraggableItemProps {
  tweet: any;
}

const DraggableItem: FunctionComponent<DraggableItemProps> = ({ tweet, children }) => {
  const { toggleDragging, dropzone, savedList, updateSavedList } = useContext(SaverContext);

  const onStart = () => {
    toggleDragging();
  };

  const onStop = (e: any, data: any) => {
    const itemXY = {
      x: data.node.offsetParent.offsetWidth + data.x,
      y: data.node.offsetParent.offsetTop + data.y,
    };

    if (itemXY.x > dropzone.x) {
      if (savedList.indexOf(tweet) < 0) {
        const newArray = savedList;
        newArray.push(tweet);
        updateSavedList(newArray);
      } else {
        alert('Tweet has been added before');
      }
    }
    toggleDragging();
  };

  const dragHandlers = {
    onStart,
    onStop,
    position: { x: 0, y: 0 },
    bounds: '.container-fluid',
  };

  return <Draggable {...dragHandlers}>{children}</Draggable>;
};

export default DraggableItem;
