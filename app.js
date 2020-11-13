const express = require("express");
const app = express();
const port = 3000;

//! routes
require("./utils/routes")(app, __dirname + "/routes");

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
