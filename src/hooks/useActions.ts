import { useDispatch } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';

import { AppDispatch } from '@/redux/store/store';
import { userActions } from '@/redux/slices/userSlice';
import { playerActions } from '@/redux/slices/playerSlice';

const action = {
  ...userActions,
  ...playerActions,
};

export const useActions = () => {
  const dispatch = useDispatch<AppDispatch>();
  return bindActionCreators(action, dispatch);
};
