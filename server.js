const mongoose = require("mongoose");

const app = require("./app");

require("@colors/colors");

const { DB_HOST, PORT = 3000 } = process.env;

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(PORT);
    console.log("Database connection successful".blue.italic.bold.underline);
  })
  .catch(error => {
    console.log(error.message);
    process.exit(1);
  });
