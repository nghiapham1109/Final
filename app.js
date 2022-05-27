const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
//
const patientRouter = require("./api/patient/patientRouter");
//
const doctorRouter = require("./api/doctor/doctorRouter");
//
const diseaseRouter = require("./api/disease/diseaseRouter");
//
app.use(cors());
app.use(express.json());
//
app.use("/api/patient", patientRouter);
//
app.use("/api/doctor", doctorRouter);
//
app.use("/api/disease", diseaseRouter);
//
app.listen(process.env.APP_PORT, () => {
  console.log("Server is running...", process.env.APP_PORT);
});
