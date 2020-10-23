import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import { goToQuizz } from '../../actions';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class QuizzPenduleSimple extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { goToQuizzPage } = this.props;
    return (
      <>
        <Button
          color='default'
          variant='contained'
          onClick={() => goToQuizzPage()}>
          Retour
        </Button>
        <div>Pendule simple page</div>
      </>
    );
  }
}

const mapDispatchToProps = {
  goToQuizzPage: goToQuizz
};

const connectedComponent = connect(
  null,
  mapDispatchToProps
)(QuizzPenduleSimple);

export default connectedComponent;
