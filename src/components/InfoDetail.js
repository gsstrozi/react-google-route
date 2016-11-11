import React from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';

class InfoDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
      return (
      <div className="container">

      </div>
    );
  }
};

// Map and Set State of Store
const mapStateToProps = (state) => ({
  routes: state.routes,
  searching: state.searching
});

export default connect(mapStateToProps)(Loading);
