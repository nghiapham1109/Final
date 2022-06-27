const {
  create,
  getSchedule,
  getScheduleByIDPatient,
} = require("./scheduleService");
const { createNoti } = require("../notification/notificationService");
const { getScheduleOfDoctorById } = require("../booking/bookingService");
const { sendEmptyMessage } = require("../../utils/socket");
const jwt = require("jsonwebtoken");
const { io } = require("../../app");
module.exports = {
  createSchedule: (req, res) => {
    let token = req.get("authorization");
    token = token.slice(7);
    const decode = jwt.verify(token, "qwe1234");
    const IDPatient = decode.result.IDPatient;
    const body = req.body;

    create(body, IDPatient, (err, results) => {
      if (err) {
        return res.status(500).json({
          success: 0,
          message: "Connection failed",
        });
      }
      // create booking success (already done)
      // -> get newest booking from db  (how ?)
      const IDDoctor = body.IDDoctor;
      sendEmptyMessage(`new-schedule-${IDDoctor}`);
      getScheduleOfDoctorById(IDDoctor, (err, bookingList) => {
        if (bookingList) {
          // get the newest booking
          const IDBooking = bookingList.at(-1).IDBooking;
          createNoti(IDBooking, (err, result) => {
            if (err) {
              return res.status(500).json({
                success: 0,
                message: "Connection failed",
              });
            }
            //
            sendEmptyMessage(`new-notification-${IDDoctor}`);
            //
            return res.status(200).json({
              success: 1,
              data: results,
            });
          });
        } else {
          console.log(err);
        }
      });
      // -> create notification for it
    });
  },
  //
  getSchedule: (req, res) => {
    getSchedule((err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      return res.json({
        success: 1,
        data: results,
      });
    });
  },
  //
  getScheduleByIDPatient: (req, res) => {
    const IDPatient = req.params.IDPatient;
    getScheduleByIDPatient(IDPatient, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      if (!results) {
        return res.json({
          success: 0,
          message: "Record not found",
        });
      }
      return res.json({
        success: 1,
        data: results,
      });
    });
  },
};
