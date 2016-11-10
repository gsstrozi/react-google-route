import React, { PropTypes } from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';
import { setOnHide, setRoutes } from '../actions/actions'
import HTTPMaps from '../services/HTTPMaps';

class SearchLocation extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    HTTPMaps.findLocations(this.refs.origin.value.toLowerCase(),this.refs.destination.value.toLowerCase()).then((response) => {
      //
      if (response.data.status === "OK") {
        this.props.dispatch(setRoutes(response.data.routes));
      }
    }).catch(e => {
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
              <input type="text" ref="destination" className="form-control" placeholder="R$ / Litro"/>
            </div>
            <div className="col-sm-2">
              <input type="text" ref="destination" className="form-control" placeholder="KM / Litro"/>
            </div>
          </div>
          <br/>
          <br/>
          <button type="submit" className="btn btn-default">Buscar</button>
        </div>
      </form>
    );
  }
};

SearchLocation.defaultProps = {
    routes: [],
};

const Search = connect()(SearchLocation)

export default Search;
