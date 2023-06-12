const mongoose = require("mongoose");

const connectToDB = () => {
  mongoose
    .connect(process.env.DB_URI)
    .then(() => {
      console.log("✅ Connected to database");
    })
    .catch((err) => {
      console.log("Database Error: ", err);
      process.exit(1);
    });
};

module.exports = connectToDB;