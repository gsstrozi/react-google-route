import React from 'react';
import { render } from 'react-dom';

// export default class Home extends React.Component {}

class Home extends React.Component {
  constructor(props) {
    super(props);
    // State
    this.state = {
      test: props.test
      };
      // Bind
      this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {

    }

    render() {
      return (
        // <div> ... ..
      );
    }

}

Home.propTypes = {
    test: PropTypes.string.isRequired,
}

Home.defaultProps = {
    test: "Heey Testando Props",
};

export default Home;
