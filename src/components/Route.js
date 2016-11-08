import React from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';

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

const mapStateToProps = (state) => ({
  routes: state.routes
});

export default connect(mapStateToProps)(Route);
