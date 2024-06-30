import { TrackType } from './track';

export type ArtistType = {
  _id: string;
  name: string;
  image: string;
  followers: number;
  tracks: TrackType[];
  tags: string[];
};
