const { updateNotification } = require("./notificationService");
module.exports = {
  updateNotification: (req, res) => {
    const IDNotification = req.params.IDNotification;
    updateNotification(IDNotification, (err, results) => {
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
};
