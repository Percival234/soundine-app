import { api } from '@/redux/API/API';

import { TrackType } from '@/types/track';
import { ArtistType } from '@/types/artits';
import { PlaylistType } from '@/types/playlist';

type SearchResponse = {
  tracks: TrackType[];
  artists: ArtistType[];
  playlists: PlaylistType[];
};
type SearchArgs = { query: string; limit: number };

export const searchApi = api.injectEndpoints({
  endpoints: (builder) => ({
    search: builder.query<SearchResponse, SearchArgs>({
      query: ({ query, limit }) => ({
        url: `/search?query=${query}&limit=${limit}`,
      }),
    }),
  }),
});

export const { useLazySearchQuery } = searchApi;
