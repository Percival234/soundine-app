import { AiOutlineTrophy } from 'react-icons/ai';

import { Link } from '@/components/UI/Link';
import { Card } from '@/components/UI/Card';
import { Image } from '@/components/UI/Image';
import { Title } from '@/components/UI/Title';
import { Paragraph } from '@/components/UI/Paragraph';

import Img from '@/assets/image/singers.png';

export const TopCard = () => {
  return (
    <Card className="flex-1 flex flex-col items-start overflow-hidden md:p-6 isolate">
      <Title>Popular</Title>
      <Paragraph align="left" className="max-w-xs">
        Explore the best of the best! Here is a collection of the best songs today!
      </Paragraph>
      <Link variant="ghost" size="icon" aria-label="Navigate to most popular page" to="/popular">
        <AiOutlineTrophy size={40} />
      </Link>
      <Image src={Img} alt="artists" />
    </Card>
  );
};
