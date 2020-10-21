import React from 'react';
import { Button } from '@material-ui/core';
import { goToChoice } from '../../actions';
import { connect } from 'react-redux';

const QuizzPage = props => (
  <div>
    <h1>This will be the quizz page!</h1>
    <Button
      onClick={() => props.goToChoice()}
      variant='contained'
      color='secondary'>
      Back
    </Button>
  </div>
);

const mapDispatchToProps = {
  goToChoice
};

const connectedComponent = connect(null, mapDispatchToProps)(QuizzPage);

export default connectedComponent;
