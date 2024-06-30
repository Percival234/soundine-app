import { useState } from 'react';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

import { Button } from '@/components/UI/Button';

import { useToggleFavoritesMutation } from '@/redux/endpoints/userEndpoints';

import { useAppSelector } from '@/hooks/useAppSelector';

type LikeButtonProps = {
  id: string;
  type: 'tracks' | 'artists' | 'playlists';
  className?: string;
};

export const LikeButton: React.FC<LikeButtonProps> = ({ id, type, className }) => {
  const user = useAppSelector((state) => state.user.user);
  const [isFavorite, setFavorite] = useState(
    user?.favorites?.[type]?.some((item) => item._id === id || false)
  );
  const [toggleFavorites] = useToggleFavoritesMutation();

  const changeFav = () => {
    toggleFavorites({ id, type });
    setFavorite(!isFavorite);
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
      onClick={changeFav}
      className={className}>
      <div className="text-pink-500">{isFavorite ? <AiFillHeart /> : <AiOutlineHeart />}</div>
    </Button>
  );
};
