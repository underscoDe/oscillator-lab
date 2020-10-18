import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withTranslation } from "react-i18next";
import { Progress } from "reactstrap";
import { DEFAULT_LANG, DEFAULT_MODE } from "../config/settings";
import { getAppInstance, getContext, toggleLoader } from "../actions";
import TeacherMode from "../modes/TeacherMode";
import StudentMode from "../modes/StudentMode";
import GraaspLogo from "../resources/GraaspLogo.svg";
import "./App.css";
import "./FontAwesomeIcons";

export class App extends Component {
  static propTypes = {
    i18n: PropTypes.shape({
      defaultNS: PropTypes.string
    }).isRequired,
    loading: PropTypes.bool.isRequired,
    dispatchGetContext: PropTypes.func.isRequired,
    dispatchGetAppInstance: PropTypes.func.isRequired,
    dispatchToggleLoader: PropTypes.func.isRequired,
    mode: PropTypes.string,
    lang: PropTypes.string
  };

  static defaultProps = {
    mode: DEFAULT_MODE,
    lang: DEFAULT_LANG
  };

  // interval to refresh loader in ms
  static loadingInterval = 10;

  // time to show loading screen in ms
  static loadingTime = 2000;

  // how much to advance the progress bar every loading interval
  static progressStepSize = 1;

  constructor(props) {
    super(props);
    // first thing to do is get the context
    props.dispatchGetContext();
    // then get the app instance
    props.dispatchGetAppInstance();
  }

  state = {
    progress: 0
  };

  componentDidMount() {
    const { lang, dispatchToggleLoader } = this.props;
    // set the language on first load
    this.handleChangeLang(lang);

    // show loading screen
    setTimeout(() => {
      dispatchToggleLoader(false);
    }, App.loadingTime);

    this.loading = setInterval(() => {
      this.setState(state => ({
        progress: state.progress + App.progressStepSize
      }));
    }, App.loadingInterval);
  }

  componentDidUpdate({ lang: prevLang }) {
    const { lang } = this.props;
    const { progress } = this.state;
    // handle a change of language
    if (lang !== prevLang) {
      this.handleChangeLang(lang);
    }

    // clear loading function
    if (progress >= 100) {
      clearInterval(this.loading);
    }
  }

  handleChangeLang = lang => {
    const { i18n } = this.props;
    i18n.changeLanguage(lang);
  };

  render() {
    const { mode, loading } = this.props;
    const { progress } = this.state;

    if (loading) {
      return (
        <div className='App-loader'>
          <img src={GraaspLogo} className='App-loader-logo' alt='Logo' />
          <Progress
            value={progress}
            barClassName='App-loader-progress-bar'
            className='App-loader-progress-bar-container'
          />
        </div>
      );
    }

    switch (mode) {
      // show teacher view when in teacher mode
      case "teacher":
        // TODO::the teacher view is empty for the moment
        return <TeacherMode />;

      // by default go with the student mode
      case "student":
      default:
        return <StudentMode />;
    }
  }
}

const mapStateToProps = ({ context, layout }) => ({
  lang: context.lang,
  mode: context.mode,
  appInstanceId: context.appInstanceId,
  loading: layout.showLoader
});

const mapDispatchToProps = {
  dispatchGetContext: getContext,
  dispatchGetAppInstance: getAppInstance,
  dispatchToggleLoader: toggleLoader
};

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);

export default withTranslation()(ConnectedApp);
