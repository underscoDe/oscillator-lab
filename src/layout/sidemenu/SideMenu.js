import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withTranslation } from "react-i18next";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
//import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Description from "../../components/Description";
import Styles from "./Styles";
import { toggleSideMenu } from "../../actions";

const styles = Styles;

class SideMenu extends Component {
  handleToggleSideMenu = open => () => {
    const { dispatchToggleSideMenu } = this.props;
    dispatchToggleSideMenu(open);
  };

  render() {
    const { classes, theme, showSideMenu, t } = this.props;

    return (
      <Fragment>
        {/* <CssBaseline /> */}
        <Drawer
          className={classes.drawer}
          variant='persistent'
          anchor='right'
          open={showSideMenu}
          classes={{
            paper: classes.drawerPaper
          }}>
          <div className={classes.drawerHeader}>
            <IconButton
              onClick={this.handleToggleSideMenu(false)}
              style={{ outline: "none" }}>
              {theme.direction === "rtl" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
            <h3>{t("Observe")}</h3>
          </div>
          <Divider />
          <Description t={t} />
        </Drawer>
      </Fragment>
    );
  }
}

SideMenu.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  theme: PropTypes.shape({}).isRequired,
  t: PropTypes.func.isRequired,
  dispatchToggleSideMenu: PropTypes.func.isRequired,
  showSideMenu: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  themeColor: state.layout.themeColor,
  showHeader: state.layout.showHeader,
  showSideMenu: state.layout.showSideMenu
});

const mapDispatchToProps = {
  dispatchToggleSideMenu: toggleSideMenu
};

const ConnectedComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(SideMenu);

const StyledComponent = withStyles(styles, { withTheme: true })(
  ConnectedComponent
);

export default withTranslation()(StyledComponent);
