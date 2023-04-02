import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { HOCProps } from './HOC';
import Header from './modules/dashboard/components/header/header';

const HeaderWithProps = HOCProps(Header);

function AppRouter() {
  return (
    <BrowserRouter>
      <HeaderWithProps />
      <App />
    </BrowserRouter>
  );
}

export default AppRouter;
