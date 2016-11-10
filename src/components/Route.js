import React from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';

class Route extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const routesMap = this.props.routes.map((route, index) => {
      const legsMap = route.legs.map((leg, i) => {
        return (
          <div key={index} className="row">
            <div className="col-sm-6">
              <div className="pull-right">
                <img src={'../img/time.png'}/>
                <h6> {leg.duration.text.replace(/[\.-]/g, "").toUpperCase()} </h6>
              </div>
            </div>

            <div className="col-sm-6">
              <div className="pull-left">
                <img src={'../img/distance.png'} />
                <h6> {leg.distance.text.replace(/[\.-]/g, "").toUpperCase()} </h6>
              </div>
            </div>
          </div>
        );
      });
      return legsMap;
    });

    return (
      <div className="container">
        {routesMap}
      </div>
    );
  }
};

// Mapeia e atribui os estados da store
const mapStateToProps = (state) => ({
  routes: state.routes
});

export default connect(mapStateToProps)(Route);
