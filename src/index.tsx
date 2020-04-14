import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, useHistory } from "react-router-dom";
import App from "./App";
import { analytics } from "./configs/firebase";
import * as serviceWorker from "./serviceWorker";

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

const logCurrentPage = () => {
  analytics().setCurrentScreen(window.location.pathname);
  // @ts-ignore
  analytics().logEvent("screen_view");
};

const AnalyticsComponent = () => {
  const history = useHistory();
  useEffect(() => {
    logCurrentPage(); // log the first page visit
    history.listen(() => {
      logCurrentPage();
    });
  }, [history]);
  return null;
};

export default ReactDOM.render(
  <Router>
    <AnalyticsComponent />
    <App />
  </Router>,
  document.getElementById("root")
);
