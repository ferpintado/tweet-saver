import { createContext } from 'react';

const SaverContext = createContext<any>({
  dragging: false,
  savedList: [],
  updateSavedList: (newList: []) => {},
  toggleDragging: () => {},
  dropzone: {
    x: 0,
    y: 0,
  },
  updateDropzone: (newDropzone: any) => {},
});

export default SaverContext;
