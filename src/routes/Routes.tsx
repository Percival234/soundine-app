import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { App } from '@/App';

import { Root } from '@/root/Root';

import { Tag } from '@/pages/Tag';
import { New } from '@/pages/New';
import { Auth } from '@/pages/Auth';
import { Home } from '@/pages/Home';
import { Tags } from '@/pages/Tags';
import { Music } from '@/pages/Music';
import { Track } from '@/pages/Track';
import { Artist } from '@/pages/Artist';
import { Popular } from '@/pages/Popular';
import { Artists } from '@/pages/Artists';
import { Playlist } from '@/pages/Playlist';
import { NotFound } from '@/pages/NotFound';
import { Settings } from '@/pages/Settings';
import { Favorites } from '@/pages/Favorites';
import { Collection } from '@/pages/Collection';

import { SignIn } from '@/components/Auth/SignIn/SignIn';
import { SignUp } from '@/components/Auth/SignUp/SignUp';
import { UserTracks } from '@/components/User/UserTracks';
import { UserArtists } from '@/components/User/UserArtists';
import { UserPlaylists } from '@/components/User/UserPlaylists';

import { ProtectedRoute } from '@/routes/ProtectedRoute';

const router = createBrowserRouter([
  {
    path: '',
    element: <App />,
    children: [
      {
        path: '',
        element: (
          <ProtectedRoute>
            <Root />
          </ProtectedRoute>
        ),
        children: [
          {
            path: '',
            element: <Home />,
          },
          {
            path: 'music',
            children: [
              {
                path: '',
                element: <Music />,
              },
              {
                path: 'playlists/:id',
                element: <Playlist />,
              },
              {
                path: 'collections/:id',
                element: <Collection />,
              },
              {
                path: 'tags',
                element: <Tags />,
              },
              {
                path: 'tags/:tag',
                element: <Tag />,
              },
              {
                path: 'artists',
                element: <Artists />,
              },
              {
                path: 'artists/:name',
                element: <Artist />,
              },
              {
                path: 'tracks/:id',
                element: <Track />,
              },
              {
                path: 'new',
                element: <New />,
              },
            ],
          },
          {
            path: 'popular',
            element: <Popular />,
          },
          {
            path: 'favorites',
            element: <Favorites />,
            children: [
              {
                path: '',
                element: <UserTracks />,
              },
              {
                path: 'playlists',
                element: <UserPlaylists />,
              },
              {
                path: 'artists',
                element: <UserArtists />,
              },
            ],
          },
          {
            path: 'settings',
            element: <Settings />,
          },
        ],
      },
      {
        path: 'user',
        element: <Auth />,
        children: [
          {
            path: 'sign-in',
            element: <SignIn />,
          },
          {
            path: 'sign-up',
            element: <SignUp />,
          },
        ],
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);

export const Router = () => {
  return <RouterProvider router={router} />;
};
