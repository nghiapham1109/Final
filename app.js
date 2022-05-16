const express = require("express");
const app = express();
require("dotenv").config();
const patientRouter = require("./api/patient/patientRouter");
app.use(express.json());
app.use("/api/patient", patientRouter);
app.listen(process.env.APP_PORT, () => {
  console.log("Server is running...", process.env.APP_PORT);
});
