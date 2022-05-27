const { getDisease, getDiseaseById } = require("./diseaseService");
module.exports = {
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
};
