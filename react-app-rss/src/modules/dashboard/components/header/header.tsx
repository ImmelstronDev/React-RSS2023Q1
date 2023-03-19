import React from 'react';
import { Link } from 'react-router-dom';
import { WithRouterProps } from '../../../../HOC';
import cls from './header.module.scss';

class Header extends React.PureComponent<WithRouterProps> {
  render(): React.ReactNode {
    const {
      location: { pathname },
    } = this.props;
    let title: string;
    switch (pathname) {
      case '/':
        title = 'Home Page';
        break;
      case '/aboutus':
        title = 'About Us';
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
      </div>
    );
  }
}

export default Header;
