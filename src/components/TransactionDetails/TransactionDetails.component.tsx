import { hashCurrencySelector } from '../../rtk/slices/selectors/hash.selector';
import { useAppSelector } from '../../rtk/store';
import { TransactionDetailsProps, Input, Output } from '../../types';

const TransactionDetails = ({
  hash,
  time,
  size,
  block_height,
  inputs,
  out,
  fee,
}: TransactionDetailsProps) => {
  const { currency } = useAppSelector(hashCurrencySelector);

  const confirmations = block_height ? block_height - 0 : 0;
  const totalInput = inputs.reduce(
    (total: number, input: Input) => total + input.prev_out.value,
    0,
  );
  const totalOutput = out.reduce(
    (total: number, output: Output) => total + output.value,
    0,
  );

  const currencyMap = {
    BTC: { conversion: 1, symbol: 'BTC' },
    USD: { conversion: 21767.07, symbol: '$' },
    EUR: { conversion: 20571.63, symbol: '€' },
  } as any;

  return (
    <ul className="h-full flex flex-col justify-evenly items-start">
      <li>
        <span className="font-bold">Transaction hash: </span>
        {`${hash}`}
      </li>
      <li>
        <span className="font-bold">Received time: </span>
        {`${new Date(time * 1000)}`}
      </li>
      <li>
        <span className="font-bold">Status: </span>
        {confirmations > 0 ? 'Confirmed' : 'Unconfirmed'}
      </li>
      <li>
        <span className="font-bold">Size: </span>
        {`${size}`}
      </li>
      <li>
        <span className="font-bold">Number of confirmations: </span>
        {`${confirmations}`}
      </li>
      <li>
        <span className="font-bold">Total BTC input: </span>
        {`${(totalInput / 100000000) * currencyMap[currency].conversion} ${
          currencyMap[currency].symbol
        }`}
      </li>
      <li>
        <span className="font-bold">Total BTC output: </span>
        {`${(totalOutput / 100000000) * currencyMap[currency].conversion} ${
          currencyMap[currency].symbol
        }`}
      </li>
      <li>
        <span className="font-bold">Total fees: </span>
        {`${fee}`}
      </li>
    </ul>
  );
};

export default TransactionDetails;
