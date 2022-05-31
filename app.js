require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
app.use(
  cors({
    origin: "*",
    methods: ["GET", "HEAD", "OPTIONS", "POST", "PUT", "DELETE"],
    credentials: false,
  })
);
//
app.use(express.json());
//
const patientRouter = require("./api/patient/patientRouter");
//
const doctorRouter = require("./api/doctor/doctorRouter");
//
const diseaseRouter = require("./api/disease/diseaseRouter");
//
const scheduleRouter = require("./api/schedule/scheduleRouter");
//
const bookingRouter = require("./api/booking/bookingRouter");
//
app.use("/api/patient", patientRouter);
//
app.use("/api/doctor", doctorRouter);
//
app.use("/api/disease", diseaseRouter);
//
app.use("/api/schedule", scheduleRouter);
//
app.use("/api/booking", bookingRouter);
//
app.listen(process.env.APP_PORT, () => {
  console.log("Server is running...", process.env.APP_PORT);
});
