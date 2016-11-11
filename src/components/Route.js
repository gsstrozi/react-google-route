import React from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';

class Route extends React.Component {
  constructor(props) {
    super(props);
    this.totalAmount = this.totalAmount.bind(this);
  }

  totalAmount (km, fuel, liters) {
    console.log(km);
    console.log(fuel);
    console.log(liters);
    return ((km / liters) * fuel).toFixed(2);
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
            <div className="text-center">
                <img src={'../img/money.png'} />
                <h6> R$ {this.totalAmount(parseFloat(leg.distance.text), this.props.fuelamt, this.props.km)} </h6>
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

// Map and Set State of Store
const mapStateToProps = (state) => ({
  routes: state.routes,
  km: state.km,
  fuelamt: state.fuelamt,
});

export default connect(mapStateToProps)(Route);
