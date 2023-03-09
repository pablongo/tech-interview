import { hashCurrencySelector } from '../../rtk/slices/selectors/hash.selector';
import { useAppSelector } from '../../rtk/store';
import { AddressDetailsProps } from '../../types';

const AddressDetails = ({
  n_tx,
  total_received,
  total_sent,
  final_balance,
}: AddressDetailsProps) => {
  const { currency } = useAppSelector(hashCurrencySelector);

  const currencyMap = {
    BTC: { conversion: 1, symbol: 'BTC' },
    USD: { conversion: 21767.07, symbol: '$' },
    EUR: { conversion: 20571.63, symbol: '€' },
  } as any;

  return (
    <ul className="h-full flex flex-col justify-evenly items-start">
      <li>
        <span className="font-bold">Number of confirmed transaction</span>
        {`${n_tx}`}
      </li>
      <li>
        <span className="font-bold">Total BTC received</span>
        {`${(total_received / 100000000) * currencyMap[currency].conversion} ${
          currencyMap[currency].symbol
        }`}
      </li>
      <li>
        <span className="font-bold">Total BTC spent</span>
        {`${(total_sent / 100000000) * currencyMap[currency].conversion} ${
          currencyMap[currency].symbol
        }`}
      </li>
      <li>
        <span className="font-bold">Total BTC unspend</span>
        {`${(final_balance / 100000000) * currencyMap[currency].conversion} ${
          currencyMap[currency].symbol
        }`}
      </li>
      <li>
        <span className="font-bold">Current address balance</span>
        {`${(final_balance / 100000000) * currencyMap[currency].conversion} ${
          currencyMap[currency].symbol
        }`}
      </li>
    </ul>
  );
};

export default AddressDetails;
