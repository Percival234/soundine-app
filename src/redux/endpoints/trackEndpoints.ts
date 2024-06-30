import { api } from '@/redux/API/API';

import { TrackType } from '@/types/track';

type GetTrackResponse = TrackType;
type GetTrackArgs = string;

type GetPopularTracksResponse = { tracks: TrackType[]; hasMore: boolean };
type GetPopularTracksArgs = { page?: number; limit: number };

type GetTracksByTagResponse = { tracks: TrackType[]; hasMore: boolean };
type GetTracksByTagArgs = {
  page?: number;
  limit: number;
  tags: string[];
  exclude?: string;
};

type GetNewTracksResponse = { tracks: TrackType[]; hasMore: boolean };
type GetNewTracksArgs = {
  page?: number;
  limit: number;
};

type GetRandomTrackResponse = TrackType;
type GetRandomTrackArgs = void;

export const trackApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getTrack: builder.query<GetTrackResponse, GetTrackArgs>({
      query: (id) => ({
        url: `tracks/${id}`,
      }),
    }),
    getPopularTracks: builder.query<GetPopularTracksResponse, GetPopularTracksArgs>({
      query: ({ page = 1, limit }) => ({
        url: `tracks/popular?page=${page}&limit=${limit}`,
      }),
    }),
    getTracksByTags: builder.query<GetTracksByTagResponse, GetTracksByTagArgs>({
      query: ({ tags, page = 1, limit, exclude }) => ({
        url: `tracks/tags?tags=${encodeURIComponent(
          tags.toString()
        )}&page=${page}&limit=${limit}&exclude=${exclude}`,
      }),
    }),
    getNewTracks: builder.query<GetNewTracksResponse, GetNewTracksArgs>({
      query: ({ page = 1, limit }) => ({
        url: `tracks/new?page=${page}&limit=${limit}`,
      }),
    }),
    getRandomTrack: builder.query<GetRandomTrackResponse, GetRandomTrackArgs>({
      query: () => ({
        url: 'tracks/random',
      }),
    }),
  }),
});

export const {
  useGetRandomTrackQuery,
  useGetTrackQuery,
  useGetNewTracksQuery,
  useGetTracksByTagsQuery,
  useGetPopularTracksQuery,
} = trackApi;
