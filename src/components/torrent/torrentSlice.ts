import { createSlice } from '@reduxjs/toolkit';

export interface Itorrent {
  manget: string,
  name: string,
  progress: number,
  size?: number,
  status?: string
}

const torrentSlice = createSlice({
  name: 'torrents',
  initialState: Array<Itorrent>(),
  reducers: {
    updateTorrentList(state, action) {
      state = action.payload
    },
  },
})

export default torrentSlice.reducer;