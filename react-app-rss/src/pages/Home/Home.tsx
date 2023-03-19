import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.PureComponent {
  render(): React.ReactNode {
    return (
      <div>
        <Link to="/">HomePage</Link>
        <Link to="/aboutus">AboutUs</Link>
      </div>
    );
  }
}
export default Home;
