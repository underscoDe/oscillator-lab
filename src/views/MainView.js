import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
//import { withStyles } from "@material-ui/core/styles";
import Main from "../layout/main/Main";
import SideMenu from "../layout/sidemenu/SideMenu";
//import Styles from "../layout/sidemenu/Styles";
import { AppState } from "../config/AppState";

//const styles = Styles;

class MainView extends Component {
  state = AppState;

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Main />
        <SideMenu />
      </div>
    );
  }
}

MainView.propTypes = {
  classes: PropTypes.shape({}).isRequired
};

const mapStateToProps = state => ({
  themeColor: state.layout.themeColor,
  showHeader: state.layout.showHeader
});

const connectedComponent = connect(mapStateToProps)(MainView);

//export default withStyles(styles, { withTheme: true })(connectedComponent);
export default connectedComponent;
