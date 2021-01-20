import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import store from "./store";

import WebFont from "webfontloader";

WebFont.load({
  google: {
    families: [
      "Assistant:wght@200;300;400;500;600;700;800",
      "Jura:wght@300;400;500;600;700",
      "Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900",
    ],
  },
});

window.React = React;
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
