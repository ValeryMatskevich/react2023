import { bindActionCreators } from '@reduxjs/toolkit';
import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { actions as paginationActions } from '../store/pagination/pagination.slice';
import { actions as loadingFlagsActions } from '../store/loadingFlags/loadingFlags.slice';
import { actions as searchActions } from '../store/search/search.slice';

const rootActions = {
  ...paginationActions,
  ...loadingFlagsActions,
  ...searchActions,
};

const useActions = () => {
  const dispatch = useDispatch();

  return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch]);
};

export default useActions;
