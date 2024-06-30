import { ArtistType } from './artits';

export type ListResponse = {
  page: number;
  limit: number;
  artists: ArtistType[];
  hasMore: boolean;
};
