const {
  create,
  getPatient,
  getPatientById,
  updatePatient,
  deletePatient,
  getPatientByEmail,
} = require("./patientService");
const { genSaltSync, hashSync } = require("bcrypt");
const { sign } = require("jsonwebtoken");
const jwt = require("jsonwebtoken");
const { compareSync } = require("bcrypt");
module.exports = {
  createPatient: (req, res) => {
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
  getPatientById: (req, res) => {
    const IDPatient = req.params.IDPatient;
    getPatientById(IDPatient, (err, results) => {
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
  getPatient: (req, res) => {
    getPatient((err, results) => {
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
  updatePatient: (req, res) => {
    const body = req.body;
    const salt = genSaltSync(10);
    body.Pw = hashSync(body.Pw, salt);
    updatePatient(body, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      return res.json({
        success: 1,
        message: "Successfully",
      });
    });
  },
  //
  deletePatient: (req, res) => {
    const data = req.body;
    deletePatient(data, (err, results) => {
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
        message: "Deleted!",
      });
    });
  },
  //
  login: (req, res) => {
    const body = req.body;
    getPatientByEmail(body.Email, (error, results) => {
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
        const takeIDPatient = verify.result.IDPatient;
        console.log(takeIDPatient, decode);
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
