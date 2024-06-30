import { PlaylistType } from '@/types/playlist';

import { Title } from '@/components/UI/Title';
import { Paragraph } from '@/components/UI/Paragraph';
import { TagsList } from '@/components/Tags/TagsList';
import { LikeButton } from '@/components/Buttons/LikeButton';
import { TotalCounts } from '@/components/Total/TotalCounts';
import { Image, ImageContainer } from '@/components/UI/Image';
import { ShareButton } from '@/components/Buttons/ShareButton';

import { SERVER_URL } from '@/constants/constants';

type PLaylistInfoProps = {
  playlist: PlaylistType;
};

export const PlaylistInfo: React.FC<PLaylistInfoProps> = ({
  playlist: { _id, name, image, tags, description, tracks, followers },
}) => {
  return (
    <div className="flex gap-5 flex-col @lg:flex-row self-center items-center">
      <ImageContainer>
        <Image src={`${SERVER_URL}/static/images/playlists/${image}`} alt={name} />
      </ImageContainer>
      <div className="flex flex-col gap-2 justify-center items-center @lg:items-baseline">
        <Title>{name}</Title>
        <Paragraph align="center" className="@lg:text-left">
          {description}
        </Paragraph>
        <div className="flex flex-col gap-1 items-center @2xl:items-start">
          <TagsList tags={tags} />
        </div>
        <TotalCounts tracks={tracks} followers={followers} />
        <div className="flex gap-2">
          <LikeButton id={_id} type="playlists" />
          <ShareButton />
        </div>
      </div>
    </div>
  );
};
