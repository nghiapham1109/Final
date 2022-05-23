const { getDoctor, getDoctorById } = require("./doctorService");
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
};
