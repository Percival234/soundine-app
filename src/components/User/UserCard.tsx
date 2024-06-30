import { useMemo } from 'react';
import { BsMusicNoteBeamed } from 'react-icons/bs';
import { AiOutlineTeam, AiOutlinePlaySquare } from 'react-icons/ai';

import { Link } from '@/components/UI/Link';
import { Card } from '@/components/UI/Card';
import { Title } from '@/components/UI/Title';
import { Paragraph } from '@/components/UI/Paragraph';
import { TagsList } from '@/components/Tags/TagsList';
import { PageLoading } from '@/components/UI/Loading';
import { TotalCounts } from '@/components/Total/TotalCounts';

import { useAppSelector } from '@/hooks/useAppSelector';

export const UserCard = () => {
  const user = useAppSelector((state) => state.user?.user);

  const mostFavorite = useMemo(() => {
    const tracks = user?.favorites?.tracks;

    if (!tracks) return [];

    const tagsCounts: { [key: string]: number } = {};

    tracks.forEach((track) => {
      if (track.tags && Array.isArray(track.tags)) {
        track.tags.forEach((tag) => {
          tagsCounts[tag] = (tagsCounts[tag] || 0) + 1;
        });
      }
    });

    const topTags = Object.keys(tagsCounts)
      .map((tag) => ({
        tag,
        count: tagsCounts[tag],
      }))
      .sort((a, b) => b.count - a.count)
      .map((tag) => tag.tag)
      .slice(0, 3);

    return topTags;
  }, [user?.favorites?.tracks]);

  if (!user) return <PageLoading />;

  return (
    <Card className="flex-1 flex-row justify-between gap-0 md:gap-0 p-2 md:p-1.5">
      <div className="flex flex-col justify-between gap-3 p-2.5">
        <div className="flex flex-col">
          <Title>{user?.name}</Title>
          <Paragraph>{user?.email}</Paragraph>
        </div>
        <div className="flex flex-col gap-2">
          <TagsList tags={mostFavorite} />
          <TotalCounts
            tracks={user?.favorites?.tracks}
            playlists={user?.favorites?.playlists}
            artists={user?.favorites?.artists}
          />
        </div>
      </div>
      <div className="flex flex-col justify-between">
        <Link variant="ghost" size="icon" aria-label="Navigate to favorite tracks" to="/favorites">
          <BsMusicNoteBeamed />
        </Link>
        <Link
          variant="ghost"
          size="icon"
          aria-label="Navigate to favorite playlists"
          to="/favorites/playlists">
          <AiOutlinePlaySquare />
        </Link>
        <Link
          variant="ghost"
          size="icon"
          aria-label="Navigate to favorite artists"
          to="/favorites/artists">
          <AiOutlineTeam />
        </Link>
      </div>
    </Card>
  );
};
