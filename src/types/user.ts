import { TrackType } from './track';
import { ArtistType } from './artits';
import { PlaylistType } from './playlist';

export type UserFavoritesType = {
  tracks: TrackType[];
  artists: ArtistType[];
  playlists: PlaylistType[];
};

export type UserType = {
  _id: string;
  name: string;
  email: string;
  favorites: UserFavoritesType;
};
