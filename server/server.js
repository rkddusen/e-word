const express = require("express");
const app = express();
const index = require("./route/index");
const bodyParser = require('body-parser')
const port = process.env.PORT || 3002;
const cors = require('cors');

app.use(cors()); 
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use("/", index);

app.listen(port, () => {
  console.log(`express is running on ${port}`);
});
