const {
  create,
  getSchedule,
  getScheduleByIDPatient,
} = require("./scheduleService");
const jwt = require("jsonwebtoken");
module.exports = {
  createSchedule: (req, res) => {
    let token = req.get("authorization");
    token = token.slice(7);
    const decode = jwt.verify(token, "qwe1234");
    const IDPatient = decode.result.IDPatient;
    const body = req.body;
    create(body, IDPatient, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "Connection failed",
        });
      }
      return res.status(200).json({
        success: 1,
        data: results,
      });
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
