import React from 'react';
import { render } from 'react-dom';

class Route extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const routesMap = this.props.routes ? this.props.routes.map((route, index) => {

      return (
        <div key={index} className="row">
        <div className="col-sm-4">
        <img img src={'../img/time.png'}/>
        <h4> 1 </h4>
        </div>
        </div>
      );
    }) : null ;

    return (
      <div className="container">
        {routesMap}
      </div>
    );
  }
};

export default Route;
