import { Card } from '@/components/UI/Card';
import { Paragraph } from '@/components/UI/Paragraph';

type EmptyProps = {
  children: React.ReactNode;
};

export const Empty: React.FC<EmptyProps> = ({ children }) => {
  return (
    <Card className="items-center text-center text-zinc-600 dark:text-white opacity-80 px-5 md:py-20">
      <Paragraph className="lg:text-2xl flex flex-col gap-10 items-center">{children}</Paragraph>
    </Card>
  );
};
