import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import dotenv from 'dotenv'

dotenv.config({
    path: process.env.NODE_ENV === "production" ? ".env.prod" : process.env.NODE_ENV === "test" ? ".env.test" : ".env.dev"
})


const startApp = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById("root")
  );

};

declare let window: Window & {
  cordova: unknown;
};

if (window.cordova) {
  document.addEventListener("deviceready", startApp, false);
} else {
  startApp();
}
