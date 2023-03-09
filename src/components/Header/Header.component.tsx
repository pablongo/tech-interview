import { ZeplyLogo } from '../../assets/zeply-logo';
import CurrencySelector from '../CurrencySelector/CurrencySelector.component';

const Header = () => {
  return (
    <div className="h-1/6 flex flex-row justify-between items-center p-4">
      <ZeplyLogo />
      <h1 className="text-2xl font-bold">Pau Gallardo's Challenge</h1>
      <CurrencySelector />
    </div>
  );
};

export default Header;
