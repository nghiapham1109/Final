const { getDoctor } = require("./doctorService");
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
};
