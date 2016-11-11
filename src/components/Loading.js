import React from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';

class Loading extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const loading = this.props.searching ?
    <div className="text-center">
        <img src={'../img/loading.gif'} />
    </div>
    : null;
    return (
      <div className="container">
        {loading}
      </div>
    );
  }
};

// Map and Set State of Store
const mapStateToProps = (state) => ({
  searching: state.searching
});

export default connect(mapStateToProps)(Loading);
