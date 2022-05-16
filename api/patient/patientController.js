const {
  create,
  getPatient,
  getPatientById,
  updatePatient,
  deletePatient,
} = require("./patientService");
const { genSaltSync, hashSync } = require("bcrypt");
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
        message: "Deleted!"
      })
    });
  },
};
