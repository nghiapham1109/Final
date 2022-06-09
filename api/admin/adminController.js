const {
  createDoctor,
  getAdminByEmail,
  getAdminById,
  getDoctor,
  getDoctorById,
  updateDoctor,
  updateDisease,
  getDisease,
  deleteDoctor,
  getDiseaseById,
  deleteDisease,
  createDisease,
} = require("./adminService");
const { genSaltSync, hashSync } = require("bcrypt");
const { sign } = require("jsonwebtoken");
const jwt = require("jsonwebtoken");
const { compareSync } = require("bcrypt");
module.exports = {
  createAdmin: (req, res) => {
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
  login: (req, res) => {
    const body = req.body;
    getAdminByEmail(body.Email, (error, results) => {
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
        const takeIDAdmin = verify.result.IDAdmin;
        console.log(takeIDAdmin, decode);
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
  getAdminById: (req, res) => {
    const IDAdmin = req.params.IDAdmin;
    getAdminById(IDAdmin, (err, results) => {
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
  getDiseaseById: (req, res) => {
    const IDDisease = req.params.IDDisease;
    getDiseaseById(IDDisease, (err, results) => {
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
  updateDisease: (req, res) => {
    let token = req.get("authorization");
    token = token.slice(7);
    const decode = jwt.verify(token, "qwe1234");
    const IDAdmin = decode.result.IDAdmin;
    const IDDisease = req.params.IDDisease;
    console.log("IDDisease", IDDisease);
    // console.log("IDAdmin", IDAdmin);
    const body = req.body;
    console.log(body);
    updateDisease(body, IDDisease, IDAdmin, (err, results) => {
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
  deleteDisease: (req, res) => {
    let token = req.get("authorization");
    token = token.slice(7);
    const decode = jwt.verify(token, "qwe1234");
    const IDAdmin = decode.result.IDAdmin;
    const IDDisease = req.params.IDDisease;
    deleteDisease(IDDisease, (err, results) => {
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
  createDisease: (req, res) => {
    let token = req.get("authorization");
    token = token.slice(7);
    const decode = jwt.verify(token, "qwe1234");
    const IDAdmin = decode.result.IDAdmin;
    const body = req.body;
    createDisease(body, IDAdmin, (err, results) => {
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
  createDoctor: (req, res) => {
    let token = req.get("authorization");
    token = token.slice(7);
    const decode = jwt.verify(token, "qwe1234");
    const IDAdmin = decode.result.IDAdmin;
    const body = req.body;
    const salt = genSaltSync(10);
    body.password = hashSync(body.password, salt);
    createDoctor(body, IDAdmin, (err, results) => {
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
  updateDoctor: (req, res) => {
    let token = req.get("authorization");
    token = token.slice(7);
    const decode = jwt.verify(token, "qwe1234");
    const IDAdmin = decode.result.IDAdmin;
    const IDDoctor = req.params.IDDoctor;
    // console.log("IDDoctor", IDDoctor);
    const body = req.body;
    // console.log(body);
    updateDoctor(body, IDDoctor, IDAdmin, (err, results) => {
      if (err) {
        console.log("admin", err);
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
  deleteDoctor: (req, res) => {
    let token = req.get("authorization");
    token = token.slice(7);
    const decode = jwt.verify(token, "qwe1234");
    const IDAdmin = decode.result.IDAdmin;
    const IDDoctor = req.params.IDDoctor;
    // console.log("IDAdmin", IDAdmin);
    // console.log("IDDoctor", IDDoctor);
    // const data = req.body;
    // console.log(data);
    deleteDoctor(IDDoctor, (err, results) => {
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
  getDisease: (req, res) => {
    getDisease((err, results) => {
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
};
