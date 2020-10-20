import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import Fab from "@material-ui/core/Fab";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Styles from "../sidemenu/Styles";
import { AppState } from "../../config/AppState";
import { toggleSideMenu } from "../../actions";

import StartMenu from "../../components/main/StartMenu";

const styles = Styles;

class Main extends Component {
  state = AppState;

  handleToggleSideMenu = open => () => {
    const { dispatchToggleSideMenu } = this.props;
    dispatchToggleSideMenu(open);
  };

  render() {
    const { classes, showHeader, showSideMenu, themeColor } = this.props;

    return (
      <main
        className={classNames(classes.content, {
          [classes.contentShift]: showSideMenu
        })}>
        {showHeader ? <div className={classes.drawerHeader} /> : ""}
        {showHeader ? (
          ""
        ) : (
          <Fab
            color='primary'
            aria-label='Add'
            onClick={this.handleToggleSideMenu(!showSideMenu)}
            className={classes.fab}
            style={{ backgroundColor: themeColor, outline: "none" }}>
            {showSideMenu ? (
              <ChevronRightIcon />
            ) : (
              <MenuIcon style={{ color: "white" }} />
            )}
          </Fab>
        )}

        <div className="main-container">
          <StartMenu />
        </div>
      </main>
    );
  }
}

Main.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  themeColor: PropTypes.string.isRequired,
  showHeader: PropTypes.bool.isRequired,
  showSideMenu: PropTypes.bool.isRequired,
  dispatchToggleSideMenu: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  themeColor: state.layout.themeColor,
  showHeader: state.layout.showHeader,
  showSideMenu: state.layout.showSideMenu
});

const mapDispatchToProps = {
  dispatchToggleSideMenu: toggleSideMenu
};

const connectedComponent = connect(mapStateToProps, mapDispatchToProps)(Main);

export default withStyles(styles, { withTheme: true })(connectedComponent);
