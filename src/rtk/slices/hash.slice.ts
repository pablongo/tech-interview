import { createSlice } from '@reduxjs/toolkit';
import { HashState } from '../../types';
import { fetchHash, fetchLatestBlock } from './thunks/hash.thunk';

const initialState: HashState = {
  hashInformation: {},
  isLoading: false,
  subscribedHashes: [],
  hashMessage: '',
  selectedCurrency: {},
  latestBlockHeight: 0,
  error: null,
};

export const hashSlice = createSlice({
  name: 'hashSlice',
  initialState,
  reducers: {
    clearState(state) {
      state.isLoading = false;
      state.error = null;
    },
    setHashMessage(state, action) {
      state.hashMessage = action.payload;
    },
    setCurrency(state, action) {
      console.log('action', action);
      state.selectedCurrency = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      // fetchHash Thunk
      .addCase(fetchHash.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchHash.fulfilled, (state, action) => {
        state.hashInformation = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchHash.rejected, (state, action) => {
        state.hashInformation = {};
        state.isLoading = false;
        state.error = action.error;
      })
      // fetchLatestBlock Thunk
      .addCase(fetchLatestBlock.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchLatestBlock.fulfilled, (state, action) => {
        console.log(action);
        state.latestBlockHeight = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchLatestBlock.rejected, (state, action) => {
        state.latestBlockHeight = 0;
        state.isLoading = false;
        state.error = action.error;
      });
  },
});

export const { clearState, setHashMessage, setCurrency } = hashSlice.actions;

export default hashSlice.reducer;
