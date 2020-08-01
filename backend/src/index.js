// async/await support
import "@babel/polyfill";

import app from "./app";
import './db';

const start = (app) => {
  try {
    app.listen(app.get("port"));

    console.log(`server on port ${app.get("port")}`);
  } catch (error) {
    console.error(error);
  }
};



start(app)