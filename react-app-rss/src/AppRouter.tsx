import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { setupStore } from './store/store';
import App from './App';
import { HOCProps } from './HOC';
import Header from './modules/dashboard/components/header/header';

const HeaderWithProps = HOCProps(Header);
const store = setupStore();

function AppRouter(): JSX.Element {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <HeaderWithProps />
        <App />
      </Provider>
    </BrowserRouter>
  );
}

export default AppRouter;
