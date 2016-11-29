import React, { PropTypes } from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';
import Select from 'react-select';
import HTTPMaps from '../services/HTTPMaps';
import { setPlaceSelected_To, setPlaceOptions_To } from '../actions/actions';

let suggestionOptions = { options:[] };

class PlaceTo extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.onPopuleOptions = this.onPopuleOptions.bind(this);

    this.state = {
      placeSelected_To: this.props.placeSelected_To,
      placeOptions_To: this.props.placeOptions_To
    };
  }

  onChange(value) {
    if (value == null) {
      this.props.dispatch(setPlaceOptions_To([]));
      this.props.dispatch(setPlaceSelected_To(''));
    }
    else {
      this.props.dispatch(setPlaceSelected_To(value.value));
    }
  }

  onInputChange(value) {
    suggestionOptions.options = [];
    HTTPMaps.getPlaces(value.toLowerCase()).then((response) => {
      response.data.predictions.map((predication, index) => {
        this.onPopuleOptions(predication);
      });
      setTimeout(() => this.props.dispatch(setPlaceOptions_To(suggestionOptions.options)),1000);
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
        name="placeInputTo"
        //isLoading = {true}
        value={this.props.placeSelected_To}
        options={this.props.placeOptions_To}
        onChange={this.onChange}
        onInputChange={this.onInputChange}
        placeholder="Destino"
        noResultsText="Não há Resultados"
        clearAllText="Remover Todos"
  			clearValueText="Remover"
        ref="destino"

      />
    );
  }
};

// Map and Set State of Store
const mapStateToProps = (state) => ({
  placeSelected_To: state.placeSelected_To,
  placeOptions_To: state.placeOptions_To,
});

const PTO = connect(mapStateToProps)(PlaceTo);

export default PTO;
