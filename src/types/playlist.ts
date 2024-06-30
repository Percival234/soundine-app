import { TrackType } from './track';

export type PlaylistType = {
  _id: string;
  name: string;
  image: string;
  tags: string[];
  tracks: TrackType[];
  followers: number;
  description: string;
};
