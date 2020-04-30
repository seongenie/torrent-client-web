import { configureStore } from '@reduxjs/toolkit';
import torrentReducer from '../components/torrentDownload/torrentSlice';

const store = configureStore({
  reducer: {
    torrent: torrentReducer,
  },
});

export default store;