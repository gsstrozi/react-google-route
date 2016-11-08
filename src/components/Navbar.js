import React from 'react';
import { render } from 'react-dom';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <nav className="navbar navbar-default">
          <a className="navbar-brand" >
            <p className="navbar"> Buscar Rotas </p>
          </a>
        </nav>
    );
  }
}

export default NavBar;
