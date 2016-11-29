import React, { PropTypes } from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';
import Select from 'react-select';
import HTTPMaps from '../services/HTTPMaps';
import { setPlaceSelected, setPlaceOptions } from '../actions/actions';

let suggestionOptions = { options:[] };

class PlaceFrom extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.onPopuleOptions = this.onPopuleOptions.bind(this);

    this.state = {
      placeSelected: this.props.placeSelected,
      placeOptions: this.props.placeOptions
    };
  }

  onChange(value) {
    if (value == null) {
      this.props.dispatch(setPlaceOptions([]));
      this.props.dispatch(setPlaceSelected(''));
    }
    else {
      this.props.dispatch(setPlaceSelected(value.value));
    }
  }

  onInputChange(value) {
    suggestionOptions.options = [];
    HTTPMaps.getPlaces(value.toLowerCase()).then((response) => {
      response.data.predictions.map((predication, index) => {
        this.onPopuleOptions(predication);
      });
      setTimeout(() => this.props.dispatch(setPlaceOptions(suggestionOptions.options)),1000);
    }).catch(e => {
      console.log("Ops ! " + e);
    });
  }

  onPopuleOptions(prediction) {
      const jsonData = {};

      jsonData["value"] = prediction.place_id;
      jsonData["label"] = prediction.description;

      suggestionOptions.options.push(jsonData);
   }

  render() {
    return (
      <Select
        name="placeInputFrom"
        //isLoading = {true}
        value={this.props.placeSelected}
        options={this.props.placeOptions}
        onChange={this.onChange}
        onInputChange={this.onInputChange}
        placeholder="Origem"
        noResultsText="Não há Resultados"
        clearAllText="Remover Todos"
  			clearValueText="Remover"
        ref="origem"

      />
    );
  }
};

// Map and Set State of Store
const mapStateToProps = (state) => ({
  placeSelected: state.placeSelected,
  placeOptions: state.placeOptions,
});

const PFROM = connect(mapStateToProps)(PlaceFrom);

export default PFROM;
