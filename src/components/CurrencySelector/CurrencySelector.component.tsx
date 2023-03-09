import { useEffect, useState } from 'react';
import { useAppDispatch } from '../../rtk/store';
import { setCurrency } from '../../rtk/slices/hash.slice';

const CurrencySelector = () => {
  const [currency, setLocalCurrency] = useState('BTC');
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setCurrency({ payload: currency }));
  }, [currency]);

  return (
    <div className="flex flex-row mx-4">
      <button
        className={`${currency === 'BTC' ? 'font-bold' : ''} mx-5`}
        type="button"
        onClick={() => setLocalCurrency('BTC')}
      >
        BTC
      </button>
      <button
        className={`${currency === 'EUR' ? 'font-bold' : ''} mx-5`}
        type="button"
        onClick={() => setLocalCurrency('EUR')}
      >
        EUR
      </button>
      <button
        className={`${currency === 'USD' ? 'font-bold' : ''} mx-5`}
        type="button"
        onClick={() => setLocalCurrency('USD')}
      >
        US
      </button>
    </div>
  );
};

export default CurrencySelector;
