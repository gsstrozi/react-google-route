import React from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';

class Error extends React.Component {
  constructor(props) {
    super(props);

    this.setErrorMessage = this.setErrorMessage.bind(this);
  }

  setErrorMessage (status) {
    if (status === "NOT_FOUND") {
    return "Localizaçao Não Encontrada";
    }
    else if (status === "INVALID_REQUEST") {
      return "Request Inválida";
    }
    else {
      return "Erro na requisição"
    }

    return msg;
  }

  render() {
    if (!this.props.requesterror || this.props.searching) {
      return null;
    }
    const requesterror = this.props.requesterror ?
      <div className="alert alert-warning">
        <strong>Erro !</strong> {this.setErrorMessage(null)}
      </div>
    : null;
    return (
      <div className="container">
        {requesterror}
      </div>
    );
  }
};

// Map and Set State of Store
const mapStateToProps = (state) => ({
  requesterror: state.requesterror,
  searching: state.searching
});

export default connect(mapStateToProps)(Error);
