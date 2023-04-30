import React from 'react';
import App from './App';
import { HOCProps } from './HOC';
import Header from './modules/dashboard/components/header/header';

const HeaderWithProps = HOCProps(Header);

function AppRouter(): JSX.Element {
  return (
    <>
      <HeaderWithProps />
      <App />
    </>
  );
}

export default AppRouter;
