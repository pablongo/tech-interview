import { Header, Footer } from '../components';

const LandingLayout = ({ children }: any) => {
  return (
    <div className="bg-gray-100 h-screen">
      <Header />
      <div className="flex flex-col items-center justify-center h-4/6">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default LandingLayout;
