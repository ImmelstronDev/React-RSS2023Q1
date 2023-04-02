import React from 'react';
import { Link } from 'react-router-dom';
import { WithRouterProps } from '../../../../HOC';
import cls from './header.module.scss';

function Header(props: WithRouterProps) {
  const {
    location: { pathname },
  } = props;
  let title: string;
  switch (pathname) {
    case '/':
      title = 'Home Page';
      break;
    case '/aboutus':
      title = 'About Us';
      break;
    case '/form':
      title = 'Added Form';
      break;
    default:
      title = 'Not Found';
      break;
  }

  return (
    <div>
      <h1 className={cls.abc}>{title}</h1>
      <Link to="/">HomePage</Link>
      <Link to="/aboutus">AboutUs</Link>
      <Link to="/form">AddedForm</Link>
    </div>
  );
}

export default Header;
