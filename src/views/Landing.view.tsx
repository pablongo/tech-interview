import { SearchBar, PopUpNotification, HashDetails } from '../components';
import { useAppSelector } from '../rtk/store';
import { hashSubscriptionMessageSelector } from '../rtk/slices/selectors/hash.selector';

const Landing = () => {
  const { hashMessage } = useAppSelector(hashSubscriptionMessageSelector);
  return (
    <div className="h-full w-full flex flex-row justify-evenly items-center">
      <SearchBar />
      <HashDetails />
      {hashMessage && <PopUpNotification />}
    </div>
  );
};

export default Landing;
