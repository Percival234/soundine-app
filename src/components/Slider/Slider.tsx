import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

import 'swiper/css';

import { TagType } from '@/types/tag';
import { ArtistType } from '@/types/artits';
import { PlaylistType } from '@/types/playlist';

import { Title } from '@/components/UI/Title';
import { Button } from '@/components/UI/Button';
import { TagCard } from '@/components/Tags/TagCard';
import { ArtistCard } from '@/components/Artist/ArtistCard';
import { LinkScroll, LinkMore } from '@/components/UI/Link';
import { PlaylistCard } from '@/components/Playlist/PlaylistCard';

type SliderProps = {
  type: 'artist' | 'playlist' | 'tag';
  title: string;
  data: TagType[] | PlaylistType[] | ArtistType[];
  to: string;
};

export const Slider: React.FC<SliderProps> = ({ type, title, data, to }) => {
  const id = (Math.random() * 100000).toFixed();

  const swiperSettings = {
    modules: [Navigation],
    grabCursor: true,
    speed: 600,
    slidesPerView: 1,
    slidesPerGroup: 2,
    breakpoints: {
      '@0.25': {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      '@0.75': {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      '@1.25': {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      '@1.50': {
        slidesPerView: 5,
        spaceBetween: 25,
      },
    },
    navigation: {
      prevEl: `.swiper-prev-${id}`,
      nextEl: `.swiper-next-${id}`,
    },
  };

  return (
    <>
      <div className="flex items-center gap-3 justify-between">
        <LinkScroll to={to}>
          <Title hash>{title}</Title>
        </LinkScroll>
        <div className="flex gap-1">
          <Button
            variant="ghost"
            size="icon"
            aria-label="slide to prev"
            className={`swiper-prev-${id}`}>
            <AiOutlineLeft />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            aria-label="slide to next"
            className={`swiper-next-${id}`}>
            <AiOutlineRight />
          </Button>
        </div>
      </div>
      <Swiper {...swiperSettings} className="w-full">
        {data.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              {type === 'artist' && <ArtistCard artist={item as ArtistType} />}
              {type === 'playlist' && <PlaylistCard playlist={item as PlaylistType} />}
              {type === 'tag' && <TagCard tag={item as TagType} />}
            </SwiperSlide>
          );
        })}
        <SwiperSlide>
          <LinkMore
            className={type === 'artist' ? 'h-auto aspect-square rounded-full' : ''}
            to={to}
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};
