import { ArtistType } from '@/types/artits';

import { Link, LinkScroll } from '@/components/UI/Link';
import { TotalCounts } from '@/components/Total/TotalCounts';
import { Image, ImageContainer } from '@/components/UI/Image';

import { SERVER_URL } from '@/constants/constants';

type ArtistCardProps = {
  artist: ArtistType;
};

export const ArtistCard: React.FC<ArtistCardProps> = ({
  artist: { name, image, followers, tracks },
}) => {
  return (
    <div className="group duration-300 hover:brightness-75 active:brightness-75">
      <LinkScroll to={`/music/artists/${name}`}>
        <ImageContainer className="w-auto @5xl:w-auto rounded-full">
          <Image src={`${SERVER_URL}/static/images/artists/${image}`} alt={name} />
        </ImageContainer>
      </LinkScroll>
      <div className="flex flex-col items-center px-1 py-2 truncate">
        <Link to={`/music/artists/${name}`} className="font-bold">
          {name}
        </Link>
        <TotalCounts tracks={tracks} followers={followers} />
      </div>
    </div>
  );
};
