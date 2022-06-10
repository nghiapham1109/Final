const {
  getDoctorByEmail,
  getDayBusyByIdDoctor,
  getInfoById,
  updateDayBusy,
  deleteDayBusy,
  createDayBusy,
} = require("./daybusyService");
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
  //
  getDayBusyByIdDoctor: (req, res) => {
    const IDDoctor = req.params.IDDoctor;
    getDayBusyByIdDoctor(IDDoctor, (err, results) => {
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
  getInfoById: (req, res) => {
    const IDDayBusy = req.params.IDDayBusy;
    getInfoById(IDDayBusy, (err, results) => {
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
  updateDayBusy: (req, res) => {
    let token = req.get("authorization");
    token = token.slice(7);
    const decode = jwt.verify(token, "qwe1234");
    const IDDoctor = decode.result.IDDoctor;
    const IDDayBusy = req.params.IDDayBusy;
    console.log("IDDayBusy", IDDayBusy);
    console.log("IDDoctor", IDDoctor);
    // console.log("IDAdmin", IDAdmin);
    const body = req.body;
    console.log(body);
    updateDayBusy(body, IDDayBusy, IDDoctor, (err, results) => {
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
  deleteDayBusy: (req, res) => {
    let token = req.get("authorization");
    token = token.slice(7);
    const decode = jwt.verify(token, "qwe1234");
    const IDAdmin = decode.result.IDAdmin;
    const IDDayBusy = req.params.IDDayBusy;
    deleteDayBusy(IDDayBusy, (err, results) => {
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
  createDayBusy: (req, res) => {
    let token = req.get("authorization");
    token = token.slice(7);
    const decode = jwt.verify(token, "qwe1234");
    const IDDoctor = decode.result.IDDoctor;
    const body = req.body;
    createDayBusy(body, IDDoctor, (err, results) => {
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
};
