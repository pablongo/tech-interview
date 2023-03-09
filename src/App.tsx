import { Landing } from './views';
import { store } from '../src/rtk/store';
import { Provider } from 'react-redux';
import { LandingLayout } from './layouts';

function App() {
  return (
    <Provider store={store}>
      <LandingLayout>
        <Landing />
      </LandingLayout>
    </Provider>
  );
}

export default App;
