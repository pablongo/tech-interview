import { useAppSelector } from '../../rtk/store';
import { hashSelector } from '../../rtk/slices/selectors/hash.selector';
import { TransactionDetails, AddressDetails } from '../index';

const HashDetails = () => {
  const { hashInformation } = useAppSelector(hashSelector);

  return (
    <div className="h-full w-1/2">
      {Object.keys(hashInformation).length > 0 && !hashInformation.error ? (
        !hashInformation.n_tx ? (
          <TransactionDetails
            hash={hashInformation.hash}
            total_received={hashInformation.total_received}
            time={hashInformation.time}
            size={hashInformation.size}
            block_height={hashInformation.block_height}
            inputs={hashInformation.inputs}
            out={hashInformation.out}
            fee={hashInformation.fee}
          />
        ) : (
          <AddressDetails
            n_tx={hashInformation.n_tx}
            total_received={hashInformation.total_received}
            total_sent={hashInformation.total_sent}
            final_balance={hashInformation.final_balance}
          />
        )
      ) : (
        <div className="h-3/4 flex flex-start justify-center items-center font-bold text-4xl">
          No hash found, please input a valid hash
        </div>
      )}
    </div>
  );
};

export default HashDetails;
