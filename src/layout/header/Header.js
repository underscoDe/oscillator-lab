import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { withTranslation } from 'react-i18next';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Styles from '../sidemenu/Styles';
import { toggleSideMenu } from '../../actions';

const styles = Styles;

class Header extends Component {
  handleToggleSideMenu = open => () => {
    const { dispatchToggleSideMenu } = this.props;
    dispatchToggleSideMenu(open);
  }

  render() {
    const {
      classes,
      showSideMenu,
      showHeader,
      themeColor,
      t,
    } = this.props;

    if (!showHeader) {
      return <Fragment />;
    }

    return (
      <AppBar
        position="fixed"
        className={classNames(classes.appBar, { [classes.appBarShift]: showSideMenu })}
      >
        <Toolbar disableGutters style={{ backgroundColor: themeColor }}>
          <Typography variant="h4" color="inherit" noWrap className={classes.title}>
            {t('Mechanical Oscillators Lab')}
          </Typography>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            onClick={this.handleToggleSideMenu(true)}
            className={classNames(classes.menuButton, showSideMenu && classes.hide)}
            style={{ outline: 'none' }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  themeColor: PropTypes.string.isRequired,
  showHeader: PropTypes.bool.isRequired,
  showSideMenu: PropTypes.bool.isRequired,
  t: PropTypes.func.isRequired,
  dispatchToggleSideMenu: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  themeColor: state.layout.themeColor,
  showHeader: state.layout.showHeader,
  showSideMenu: state.layout.showSideMenu,
});

const mapDispatchToProps = {
  dispatchToggleSideMenu: toggleSideMenu,
};

const ConnectedComponent = connect(mapStateToProps, mapDispatchToProps)(Header);
const StyledComponent = withStyles(styles)(ConnectedComponent);

export default withTranslation()(StyledComponent);
