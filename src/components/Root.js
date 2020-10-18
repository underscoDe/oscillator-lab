import React from "react";
import { I18nextProvider } from "react-i18next";
import i18nConfig from "../config/i18n";
import App from "./App";

const Root = () => (
  <I18nextProvider i18n={i18nConfig}>
    <App />
  </I18nextProvider>
);
export default Root;
