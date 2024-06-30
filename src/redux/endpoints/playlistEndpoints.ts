import { api } from '@/redux/API/API';

import { PlaylistType } from '@/types/playlist';

type GetPlaylistResponse = PlaylistType;
type GetPlaylistArgs = string;

type GetPopularPlaylistsResponse = { playlists: PlaylistType[]; hasMore: boolean };
type GetPopularPlaylistsArgs = { page?: number; limit: number };

export type GetPlaylistsByTagResponse = { playlists: PlaylistType[]; hasMore: boolean };
type GetPlaylistsByTagArgs = {
  page?: number;
  limit: number;
  tags: string[];
  exclude?: string;
};

type GetNewPlaylistsResponse = { playlists: PlaylistType[]; hasMore: boolean };
type GetNewPlaylistsArgs = {
  page?: number;
  limit: number;
};

export const playlistApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getPlaylist: builder.query<GetPlaylistResponse, GetPlaylistArgs>({
      query: (id) => ({
        url: `playlists/${id}`,
      }),
    }),
    getPopularPlaylists: builder.query<GetPopularPlaylistsResponse, GetPopularPlaylistsArgs>({
      query: ({ page = 1, limit }) => ({
        url: `playlists/popular?page=${page}&limit=${limit}`,
      }),
    }),
    getPlaylistsByTags: builder.query<GetPlaylistsByTagResponse, GetPlaylistsByTagArgs>({
      query: ({ tags, page = 1, limit, exclude }) => ({
        url: `playlists/tags?tags=${encodeURIComponent(
          tags.toString()
        )}&page=${page}&limit=${limit}&exclude=${exclude}`,
      }),
    }),
    getNewPlaylists: builder.query<GetNewPlaylistsResponse, GetNewPlaylistsArgs>({
      query: ({ page = 1, limit }) => ({
        url: `playlists/new?page=${page}&limit=${limit}`,
      }),
    }),
  }),
});

export const {
  useGetPlaylistQuery,
  useGetNewPlaylistsQuery,
  useGetPlaylistsByTagsQuery,
  useGetPopularPlaylistsQuery,
} = playlistApi;
