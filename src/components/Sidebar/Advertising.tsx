import { Logo } from '@/components/UI/Logo';
import { Link } from '@/components/UI/Link';
import { Paragraph } from '@/components/UI/Paragraph';

import { SOUNDINE_MAIN_PLAYLIST_ID } from '@/constants/constants';

export const Advertising = () => {
  return (
    <div className="w-72 p-6 flex flex-col gap-6">
      <Logo />
      <div className="rounded-lg bg-gradient-to-tr from-purple-800 to-main p-5 grid gap-5 text-white">
        <Paragraph align="center">Start your musical journey with our selection!</Paragraph>
        <Link variant="outline" size="large" to={`/music/playlists/${SOUNDINE_MAIN_PLAYLIST_ID}`}>
          Start now
        </Link>
      </div>
    </div>
  );
};
