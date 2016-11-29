import React, { PropTypes } from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';
import Select from 'react-select';
import { setPlaceSelected, setPlaceOptions } from '../actions/actions';

class PlaceFrom extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    /* START - MOCK PLACES */
    this.props.dispatch(setPlaceOptions([{ value: 'leme', label: 'Leme - SP' }, { value: 'araras', label: 'Araras - SP' }]));
    this.props.dispatch(setPlaceSelected("leme"));
    /* END - MOCK PLACES */

    this.state = {
      placeSelected: this.props.placeSelected,
      placeOptions: this.props.placeOptions
    };
  }

  onChange(value) {
    this.props.dispatch(setPlaceSelected(value == null ? '' : value.value));
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
        name="placeInputFrom"
        //isLoading = {true}
        value={this.props.placeSelected}
        options={this.props.placeOptions}
        onChange={this.onChange}
        placeholder="Origem"
        ref="origin"

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
