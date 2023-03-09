import { useEffect, useState } from 'react';
import { useAppDispatch } from '../../rtk/store';
import {
  fetchHash,
  fetchLatestBlock,
} from '../../rtk/slices/thunks/hash.thunk';
import { setHashMessage } from '../../rtk/slices/hash.slice';

import useWebSocket from 'react-use-websocket';
import debounce from 'lodash.debounce';

const SearchBar = () => {
  const dispatch = useAppDispatch();
  const [hash, setHash] = useState('');
  const { sendMessage, lastMessage } = useWebSocket(
    'wss://ws.blockchain.info/inv',
  );

  useEffect(() => {
    if (lastMessage) {
      dispatch(setHashMessage({ payload: JSON.stringify(lastMessage.data) }));
      setTimeout(() => {
        dispatch(setHashMessage({ payload: '' }));
      }, 3000);
    }
  }, [lastMessage]);

  const handleInputOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHash(e.target.value);
  };

  const handleDebouncedSearchAddress = debounce(() => {
    dispatch(fetchHash({ hash, hashType: 'rawaddr' }));
  }, 300);

  const handleDebouncedSearchTransaction = debounce(() => {
    dispatch(fetchHash({ hash, hashType: 'rawtx' }));
    dispatch(fetchLatestBlock());
  }, 300);

  const handleDebouncedHashSubcription = debounce(() => {
    sendMessage(
      JSON.stringify({
        op: 'ping',
      }),
    );
  }, 300);

  const handleDebouncedWsPingTest = debounce(() => {
    sendMessage(
      JSON.stringify({
        op: 'addr_sub',
        addr: hash,
      }),
    );
  }, 300);

  return (
    <div className="flex h-full w-1/2 justify-center items-center bg-">
      <div className="flex flex-col h-2/3 w-1/2 justify-center items-center rounded shadow-input">
        <input
          className="w-3/4 my-1 bg-gray-100 focus:ring-2 focus:ring-blue-600 shadow-input focus:border-transparent rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-gray-300 dark:focus:ring-blue-800"
          type="text"
          placeholder="Input Address or Transaction hash"
          onChange={handleInputOnChange}
        />
        <div className="w-full flex flex-row justify-center my-12">
          <button
            disabled={hash.length === 0}
            type="button"
            className={`${
              hash.length === 0
                ? 'opacity-50'
                : 'hover:text-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300'
            } text-blue-700 border border-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800`}
            onClick={() => handleDebouncedSearchAddress()}
          >
            Search Address
          </button>
          <button
            disabled={hash.length === 0}
            type="button"
            className={`${
              hash.length === 0
                ? 'opacity-50'
                : 'hover:text-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300'
            } text-blue-700 border border-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800`}
            onClick={() => handleDebouncedSearchTransaction()}
          >
            Search Transaction
          </button>
        </div>
        <div className="w-2/3 flex flex-row justify-end">
          <button
            disabled={hash.length === 0}
            type="button"
            className={`${
              hash.length === 0
                ? 'opacity-50'
                : 'hover:bg-secondary focus:ring-4 focus:ring-blue-300'
            } text-white bg-primary font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800`}
            onClick={() => handleDebouncedHashSubcription()}
          >
            Subscribe to hash
          </button>
        </div>
        <div className="w-2/3 flex flex-row justify-end">
          <button
            disabled={hash.length === 0}
            type="button"
            className={`${
              hash.length === 0
                ? 'opacity-50'
                : 'hover:bg-secondary focus:ring-4 focus:ring-blue-300'
            } text-white bg-primary font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800`}
            onClick={() => handleDebouncedWsPingTest()}
          >
            Ping Ws
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
