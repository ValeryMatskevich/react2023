import { bindActionCreators } from '@reduxjs/toolkit';
import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { actions as formDataActions } from '../store/formsSlice';

const rootActions = {
  ...formDataActions,
};

const useActions = () => {
  const dispatch = useDispatch();

  return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch]);
};

export default useActions;
