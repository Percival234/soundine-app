import { Logo } from '@/components/UI/Logo';
import { Link } from '@/components/UI/Link';
import { Paragraph } from '@/components/UI/Paragraph';

export const SignInContent = () => {
  return (
    <div className="animate-bounceIn opacity-0 translate-y-full p-10 hidden md:flex flex-col justify-center text-center text-white">
      <Logo />
      <Paragraph align="center" className="font-medium mt-3 mb-5">
        Start Your musical journey now!
      </Paragraph>
      <Link variant="outline" size="large" to="/user/sign-up">
        Sign up
      </Link>
    </div>
  );
};
