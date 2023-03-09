import { setHashMessage } from '../../rtk/slices/hash.slice';
import { useAppDispatch } from '../../rtk/store';

const PopUpNotification = () => {
  const dispatch = useAppDispatch();

  const handleNotificationClose = () => {
    dispatch(setHashMessage({ payload: '' }));
  };
  return (
    <button
      onClick={() => handleNotificationClose()}
      type="button"
      className="transition animate-bounce fixed top-4 right-4 z-50 rounded-md bg-yellow px-4 py-2 text-white transition hover:bg-primary"
    >
      <div className="flex items-center space-x-2">
        <p className="font-bold">New transaction in the subscribed address!</p>
      </div>
    </button>
  );
};

export default PopUpNotification;
