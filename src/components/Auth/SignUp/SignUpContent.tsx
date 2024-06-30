import { Logo } from '@/components/UI/Logo';
import { Link } from '@/components/UI/Link';
import { Paragraph } from '@/components/UI/Paragraph';

export const SignUpContent = () => {
  return (
    <div className="animate-bounceIn -translate-y-full opacity-0 p-10 hidden md:flex flex-col justify-center text-center text-white">
      <Logo />
      <Paragraph align="center" className="font-medium mt-3 mb-5">
        Continue your musical journey by logging into your account!
      </Paragraph>
      <Link variant="outline" size="large" to="/user/sign-in">
        Sign in
      </Link>
    </div>
  );
};
