import { AiOutlineFacebook, AiOutlineTwitter, AiOutlineInstagram } from 'react-icons/ai';

import { Card } from '@/components/UI/Card';
import { Button } from '@/components/UI/Button';

export const Social = () => {
  return (
    <Card className="gap-0 md:gap-0 justify-between p-1.5 md:p-1.5">
      <Button
        variant="ghost"
        size="icon"
        aria-label="go to facebook"
        className="hover:text-[#1877F2] active:text-[#1877F2]">
        <AiOutlineFacebook />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        aria-label="go to twitter"
        className="hover:text-[#1DA1F2] active:text-[#1DA1F2]">
        <AiOutlineTwitter />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        aria-label="go to instagram"
        className="hover:text-[#C13584] active:text-[#C13584]">
        <AiOutlineInstagram />
      </Button>
    </Card>
  );
};
