const express = require("express");
const app = express();
require("dotenv").config();
const patientRouter = require("./api/patient/patientRouter");
const doctorRouter = require("./api/doctor/doctorRouter");
app.use(express.json());
app.use("/api/patient", patientRouter);
app.use("/api/doctor", doctorRouter);
app.listen(process.env.APP_PORT, () => {
  console.log("Server is running...", process.env.APP_PORT);
});
