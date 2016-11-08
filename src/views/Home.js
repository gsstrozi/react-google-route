import React from 'react';
import { render } from 'react-dom';
import NavBar from '../components/Navbar';
import SearchLocation from '../components/SearchLocation';
import Route from '../components/Route';

class Home extends React.Component {
  render() {
    return (
      <div className="container">
          <NavBar />
          <SearchLocation />
          <Route />
      </div>
    );
  }
}

export default Home;
