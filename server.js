const mongoose = require("mongoose");
const app = require("./app");

const DB_HOST =
  "mongodb+srv://dragondaewoo:9YgN6ud1YnviLGM2@cluster0.mlxsxs9.mongodb.net/db-contacts";

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(3000);
    console.log("Database connection successful");
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
