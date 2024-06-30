import { api } from '@/redux/API/API';

import { UserType } from '@/types/user';

type SignInResponse = {
  token: string;
};
type SignInArgs = {
  email: string;
  password: string;
};

type SignUpResponse = {
  token: string;
};
type SignUpArgs = { email: string; password: string; name: string };

type GetCurrentUserResponse = {
  user: UserType;
};
type GetCurrentUserArgs = void;

type UpdateUserResponse = {
  message: string;
};
type UpdateUserArgs = { personal: { email: string; name: string } };

type ToggleFavoritesResponse = {
  message: string;
};
type ToggleFavoritesArgs = { id: string; type: 'tracks' | 'artists' | 'playlists' };

type DeleteUserResponse = void;
type DeleteUserArgs = void;

export const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    signIn: builder.mutation<SignInResponse, SignInArgs>({
      query: (userData) => ({
        url: 'user/sign-in',
        method: 'POST',
        body: userData,
      }),
      invalidatesTags: ['User'],
    }),
    signUp: builder.mutation<SignUpResponse, SignUpArgs>({
      query: (userData) => ({
        url: 'user/sign-up',
        method: 'POST',
        body: userData,
      }),
      invalidatesTags: ['User'],
    }),
    getCurrentUser: builder.query<GetCurrentUserResponse, GetCurrentUserArgs>({
      query: () => ({
        url: 'user',
      }),
      providesTags: ['User'],
    }),
    updateUser: builder.mutation<UpdateUserResponse, UpdateUserArgs>({
      query: (userData) => ({
        url: 'user',
        method: 'PATCH',
        body: userData,
      }),
      invalidatesTags: ['User'],
    }),
    toggleFavorites: builder.mutation<ToggleFavoritesResponse, ToggleFavoritesArgs>({
      query: (favoritesData) => ({
        url: 'user/favorites',
        method: 'POST',
        body: favoritesData,
      }),
      invalidatesTags: ['User'],
    }),
    deleteUser: builder.mutation<DeleteUserResponse, DeleteUserArgs>({
      query: () => ({
        url: 'user',
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useSignInMutation,
  useSignUpMutation,
  useUpdateUserMutation,
  useDeleteUserMutation,
  useGetCurrentUserQuery,
  useToggleFavoritesMutation,
} = userApi;
