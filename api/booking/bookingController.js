const {
  getDoctorByEmail,
  getScheduleOfDoctorById,
} = require("./bookingService");
const { genSaltSync, hashSync } = require("bcrypt");
const { sign } = require("jsonwebtoken");
const jwt = require("jsonwebtoken");
const { compareSync } = require("bcrypt");

module.exports = {
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
        // console.log(takeIDDoctor, decode);
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
  //
  getScheduleOfDoctorById: (req, res) => {
    const IDDoctor = req.params.IDDoctor;
    console.log(IDDoctor);
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
};
