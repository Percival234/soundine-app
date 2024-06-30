import { PlaylistType } from './playlist';

export type CollectionType = {
  _id: string;
  name: string;
  playlists: PlaylistType[];
};
