const mongoose = require("mongoose");

const dbconnect = async () => {
  await mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log("Mongo DB is Connected");
    })
    .catch((error) => {
      console.log("Error:", error);
    });
};

module.exports = dbconnect