import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchHash = createAsyncThunk(
  'nftList/fetchHash',
  async ({ hash, hashType }: any) => {
    const response: any = await fetch(
      `https://blockchain.info/${hashType}/${hash}`,
      {
        method: 'GET',
      },
    );
    const solution = await response.json();
    console.log('solution', solution);
    return solution;
  },
);

export const fetchLatestBlock = createAsyncThunk(
  'nftList/fetchLatestBlock',
  async () => {
    console.log('entra');
    const response: any = await fetch(`http://blockchain.info/latestblock`, {
      method: 'GET',
      redirect: 'follow',
      mode: 'no-cors',
    });
    const solution = await response.json();
    return solution;
  },
);
