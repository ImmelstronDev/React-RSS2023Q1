import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { HOCProps } from './HOC';
import Header from './modules/dashboard/components/header/header';
import './main.scss';

const HeaderWithProps = HOCProps(Header);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <HeaderWithProps />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
