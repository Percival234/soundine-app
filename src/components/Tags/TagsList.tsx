import { LinkScroll } from '@/components/UI/Link';

type TagsListProps = {
  tags: string[];
  onClick?: () => void;
};

export const TagsList: React.FC<TagsListProps> = ({ tags, onClick }) => {
  return (
    tags.length > 0 && (
      <div className="flex gap-2 flex-wrap text-sm opacity-80">
        Tags:
        {tags.map((tag) => (
          <LinkScroll
            key={tag}
            to={`/music/tags/${tag}`}
            onClick={onClick}
            className="px-1 bg-gray-opacity rounded text-sx hover:text-main">
            #{tag}
          </LinkScroll>
        ))}
      </div>
    )
  );
};
