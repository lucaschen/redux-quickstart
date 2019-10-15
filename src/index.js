import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

import Root from "./components/Root";
import store from "./store";

render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById("app")
);
