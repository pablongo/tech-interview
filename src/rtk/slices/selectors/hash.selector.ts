import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../store';

export const hashSelector = createSelector(
  (state: RootState) => state,
  (state) => ({
    isLoading: state.hashSearch.isLoading,
    hashInformation: state.hashSearch.hashInformation,
  }),
);

export const hashSubscriptionMessageSelector = createSelector(
  (state: RootState) => state,
  (state) => ({
    hashMessage: state.hashSearch.hashMessage.payload,
  }),
);

export const hashCurrencySelector = createSelector(
  (state: RootState) => state,
  (state) => {
    console.log('state', state);
    return { currency: state.hashSearch.selectedCurrency.payload };
  },
);
