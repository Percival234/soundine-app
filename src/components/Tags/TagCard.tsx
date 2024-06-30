import { TagType } from '@/types/tag';

import { Image } from '@/components/UI/Image';
import { LinkScroll } from '@/components/UI/Link';

type TagCardProps = {
  tag: TagType;
};

export const TagCard: React.FC<TagCardProps> = ({ tag: { tag, image } }) => {
  return (
    <LinkScroll to={`/music/tags/${tag}`}>
      <div className="isolate group relative flex justify-center items-center p-7 lg:p-10 text-white shadow-lg rounded-lg overflow-hidden duration-300 hover:brightness-75 active:scale-90">
        <Image src={image} alt={`tag-${tag}`} />
        <div className="font-bold text-xl capitalize whitespace-nowrap z-10">{tag}</div>
      </div>
    </LinkScroll>
  );
};
