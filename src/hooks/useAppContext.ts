import { useContext } from 'react';

import { AppContext } from '@/providers/ContextProvider';

export const useAppContext = () => useContext(AppContext);
