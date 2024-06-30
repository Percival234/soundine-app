import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { TrackType } from '@/types/track';

type initialStateType = {
  track: null | TrackType;
  tracks: TrackType[];
  isPlaying: boolean;
  index: number;
};

const initialState: initialStateType = {
  track: null,
  tracks: [],
  isPlaying: false,
  index: 0,
};

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    stop: (state) => {
      state.isPlaying = false;
      document.title = 'Soundine';
    },
    play: (state) => {
      state.isPlaying = true;
      if (state.track) {
        document.title = state.track.name;
      }
    },
    setTracks: (state, action: PayloadAction<{ index: number; tracks: TrackType[] }>) => {
      if (action.payload.index !== undefined) {
        // index value can be 0, but it is "false"
        state.index = action.payload.index;
      }
      state.tracks = action.payload.tracks;
      state.track = state.tracks[state.index];
    },
    next: (state) => {
      state.index = state.index >= state.tracks.length - 1 ? 0 : state.index + 1;
      state.track = state.tracks[state.index];
    },
    prev: (state) => {
      if (state.index <= 0) return;
      state.index--;
      state.track = state.tracks[state.index];
    },
  },
});

export const playerActions = playerSlice.actions;

export default playerSlice.reducer;
