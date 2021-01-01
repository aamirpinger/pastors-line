import { createSelector } from 'reselect';

const loadingState = state => state.loading;

export const loadingDataSelector = createSelector(loadingState, state => state);
