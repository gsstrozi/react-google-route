import React, { PropTypes } from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';
import { setRoutes, setSearching, setKM, setFuelAmt, setRequestError } from '../actions/actions';
import HTTPMaps from '../services/HTTPMaps';
import PlaceFrom from '../components/PlaceFrom';
import PlaceTo from '../components/PlaceTo';

class SearchLocation extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.dispatch(setSearching(true));
    console.log("AQ");
    HTTPMaps.getDirection(this.props.placeSelected,this.props.placeSelected_To).then((response) => {
      //
      if (response.data.status === "OK") {
        this.props.dispatch(setRequestError(false));
        this.props.dispatch(setRoutes(response.data.routes));
        setTimeout(() => this.props.dispatch(setSearching(false)),2000);
        this.props.dispatch(setKM(this.refs.km.value));
        this.props.dispatch(setFuelAmt(this.refs.fuelamt.value));
      }
    }).catch(e => {
      setTimeout(() => this.props.dispatch(setSearching(false)),1000);
      this.props.dispatch(setRequestError(true));
      console.log(e);
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <PlaceFrom/>
          <br/>
          <PlaceTo/>
          <br/>
          <div className="row">
          <br/>
            <div className="col-sm-2">
              <div className="input-group">
                <span className="input-group-addon">
                  <img src={'./img/fuel.png'} />
                  </span>
                <input type="text" ref="fuelamt" className="form-control" placeholder="R$ / Litro" aria-describedby="basic-addon1"/>
              </div>
            </div>
            <br/>
            <br/>
            <div className="col-sm-2">
              <div className="input-group">
                <span className="input-group-addon">
                  <img src={'./img/drop.png'} />
                  </span>
                <input type="text" ref="km" className="form-control" placeholder="KM / Litro" />
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
    fuelamt:0,
    requesterror:false
};

// Map and Set State of Store
const mapStateToProps = (state) => ({
  routes: state.routes,
  searching: state.searching,
  requesterror:state.requesterror,
  placeSelected_To: state.placeSelected_To,
  placeSelected: state.placeSelected,
});

const Search = connect(mapStateToProps)(SearchLocation)

export default Search;
