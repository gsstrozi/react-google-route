import React from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';

class Route extends React.Component {
  constructor(props) {
    super(props);
    this.totalAmount = this.totalAmount.bind(this);
  }

  totalAmount (km, fuel, liters) {
    if (fuel == 0 || liters == 0) {
      return 0;
    }
    return ((km / liters) * fuel).toFixed(2);
  }

  render() {
    console.log("S");
    console.log(this.props.searching);
    console.log("R");
    console.log(this.props.requesterror);
    if (this.props.searching || this.props.requesterror) {
      return null;
    }
    const routesMap = this.props.routes.map((route, index) => {
      const legsMap = route.legs.map((leg, i) => {
        var totAmount = this.totalAmount(parseFloat(leg.distance.text), this.props.fuelamt, this.props.km);
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

            {totAmount > 0 ? (
              <div className="text-center">
                <img src={'../img/money.png'} />
                <h6> R$ {totAmount} </h6>
              </div>
            ) : (
              null
            )}
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
  searching: state.searching,
  km: state.km,
  fuelamt: state.fuelamt,
  requesterror:state.requesterror
});

export default connect(mapStateToProps)(Route);
