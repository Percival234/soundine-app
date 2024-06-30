import { PageLoading } from '@/components/UI/Loading';

import { useAppSelector } from '@/hooks/useAppSelector';
import { useLocalStorage } from '@/hooks/useLocalStorage';

import { useGetCurrentUserQuery } from '@/redux/endpoints/userEndpoints';

type AuthProviderProps = {
  children: React.ReactNode;
};

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const token = useLocalStorage('token');

  const { user } = useAppSelector((state) => state.user);

  const { isFetching } = useGetCurrentUserQuery(undefined, { skip: !token });

  if (isFetching && !user) return <PageLoading />;

  return <>{children}</>;
};

export default AuthProvider;
