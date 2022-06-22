require("dotenv").config();
const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");
const app = express();
const httpServer = createServer(app);
//
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
const adminRouter = require("./api/admin/adminRouter");
//
const daybusyRouter = require("./api/daybusy/daybusyRouter");
//
const notificationRouter = require("./api/notification/notificationRouter");
const { socketConnection } = require("./utils/socket");
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
app.use("/api/admin", adminRouter);
//
app.use("/api/daybusy", daybusyRouter);
//
app.use("/api/notification", notificationRouter);
//
socketConnection(httpServer);
httpServer.listen(process.env.APP_PORT, () => {
  console.log("Server is running...", process.env.APP_PORT);
});
