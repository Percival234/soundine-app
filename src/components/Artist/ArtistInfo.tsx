import { ArtistType } from '@/types/artits';

import { Title } from '@/components/UI/Title';
import { TagsList } from '@/components/Tags/TagsList';
import { TotalCounts } from '@/components/Total/TotalCounts';
import { LikeButton } from '@/components/Buttons/LikeButton';
import { ShareButton } from '@/components/Buttons/ShareButton';
import { Image, ImageContainer } from '@/components/UI/Image';

import { SERVER_URL } from '@/constants/constants';

type ArtistInfoProps = {
  artist: ArtistType;
};

export const ArtistInfo: React.FC<ArtistInfoProps> = ({
  artist: { _id, name, image, tags, followers, tracks },
}) => {
  return (
    <div className="flex gap-5 flex-col @lg:flex-row self-center items-center">
      <ImageContainer className="rounded-full">
        <Image src={`${SERVER_URL}/static/images/artists/${image}`} alt={name} />
      </ImageContainer>
      <div className="flex flex-col gap-2 justify-center items-center @lg:items-baseline">
        <Title>{name}</Title>
        <TagsList tags={tags} />
        <TotalCounts tracks={tracks} followers={followers} />
        <div className="flex gap-2">
          <LikeButton id={_id} type="artists" />
          <ShareButton />
        </div>
      </div>
    </div>
  );
};
