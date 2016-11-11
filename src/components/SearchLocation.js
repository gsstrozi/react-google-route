import React, { PropTypes } from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';
import { setRoutes, setSearching, setKM, setFuelAmt } from '../actions/actions';
import HTTPMaps from '../services/HTTPMaps';

class SearchLocation extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.dispatch(setSearching(true));

    HTTPMaps.findLocations(this.refs.origin.value.toLowerCase(),this.refs.destination.value.toLowerCase()).then((response) => {
      //
      if (response.data.status === "OK") {
        this.props.dispatch(setRoutes(response.data.routes));
        this.props.dispatch(setSearching(false));
        this.props.dispatch(setKM(this.refs.km.value));
        this.props.dispatch(setFuelAmt(this.refs.fuelamt.value));
      }
    }).catch(e => {
      this.props.dispatch(setSearching(false));
      console.log(e);
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <input type="text" ref="origin" className="form-control" placeholder="Ponto de Partida"/>
          <br/>
          <input type="text" ref="destination" className="form-control" placeholder="Destino"/>
          <br/>
          <div className="row">
            <div className="col-sm-2">
              <div className="input-group">
                <span className="input-group-addon">
                  <img src={'../img/fuel.png'} />
                  </span>
                <input type="text" ref="fuelamt" className="form-control" placeholder="R$ / Litro" aria-describedby="basic-addon1"/>
              </div>
            </div>
            <div className="col-sm-2">
              <div className="input-group">
                <span className="input-group-addon">
                  <img src={'../img/drop.png'} />
                  </span>
                <input type="text" ref="km" className="form-control" placeholder="KM / Litro" aria-describedby="basic-addon1"/>
              </div>
            </div>
          </div>
          <br/>
          <br/>
          <button disabled={this.props.searching} type="submit" className="btn btn-default">Buscar</button>
        </div>
      </form>
    );
  }
};

SearchLocation.defaultProps = {
    routes: [],
    km:0,
    fuelamt:0
};

// Map and Set State of Store
const mapStateToProps = (state) => ({
  routes: state.routes,
  searching: state.searching,
});

const Search = connect(mapStateToProps)(SearchLocation)

export default Search;
