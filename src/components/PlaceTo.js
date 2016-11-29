import React, { PropTypes } from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';
import Select from 'react-select';
import { setPlaceSelected_To, setPlaceOptions_To } from '../actions/actions';

class PlaceTo extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    /* START - MOCK PLACES */
    this.props.dispatch(setPlaceOptions_To([{ value: 'leme', label: 'Leme - SP' }, { value: 'araras', label: 'Araras - SP' }]));
    this.props.dispatch(setPlaceSelected_To("araras"));
    /* END - MOCK PLACES */

    this.state = {
      placeSelected_To: this.props.placeSelected_To,
      placeOptions_To: this.props.placeOptions_To
    };
  }

  onChange(value) {
    this.props.dispatch(setPlaceSelected_To(value == null ? '' : value.value));
  }

  render() {
    /*
    const data = [
      { value: 'leme', label: 'Leme - SP' },
      { value: 'araras', label: 'Araras - SP' }
    ];
    */
    return (
      <Select
        name="placeInputTo"
        //isLoading = {true}
        value={this.props.placeSelected_To}
        options={this.props.placeOptions_To}
        onChange={this.onChange}
        placeholder="Destino"
        ref="destination"

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
