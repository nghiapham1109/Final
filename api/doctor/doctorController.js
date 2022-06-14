const {
  create,
  getDoctor,
  getDoctorById,
  getDoctorByEmail,
  getScheduleOfDoctorById,
  getBusyDayOfDoctorById,
} = require("./doctorService");
const { genSaltSync, hashSync } = require("bcrypt");
const { sign } = require("jsonwebtoken");
const jwt = require("jsonwebtoken");
const { compareSync } = require("bcrypt");
//
module.exports = {
  getDoctor: (req, res) => {
    getDoctor((err, results) => {
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
  getDoctorById: (req, res) => {
    const IDDoctor = req.params.IDDoctor;
    getDoctorById(IDDoctor, (err, results) => {
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
  //
  createDoctor: (req, res) => {
    const body = req.body;
    const salt = genSaltSync(10);
    body.Pw = hashSync(body.Pw, salt);
    create(body, (err, results) => {
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
  getScheduleOfDoctorById: (req, res) => {
    const IDDoctor = req.params.IDDoctor;
    getScheduleOfDoctorById(IDDoctor, (err, results) => {
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
  //
  getBusyDayOfDoctorById: (req, res) => {
    const IDDoctor = req.params.IDDoctor;
    getBusyDayOfDoctorById(IDDoctor, (err, results) => {
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
  //
  login: (req, res) => {
    const body = req.body;
    getDoctorByEmail(body.Email, (error, results) => {
      if (error) {
        console.log(error);
      }
      if (!results) {
        return res.json({
          success: 0,
          data: "Ivalid email or password",
        });
      }
      const result = compareSync(body.Pw, results.Pw);
      if (result) {
        results.Pw = undefined;
        const jsontoken = sign({ result: results }, "qwe1234", {
          expiresIn: "1h",
        });
        const decode = jwt.decode(jsontoken);
        const verify = jwt.verify(jsontoken, "qwe1234");
        const takeIDDoctor = verify.result.IDDoctor;
        console.log(takeIDDoctor, decode);
        return res.json({
          success: 1,
          message: "Success!",
          token: jsontoken,
        });
      } else {
        return res.json({
          success: 0,
          data: "Invalid email or password",
        });
      }
    });
  },
};
