const pool = require("../../config/database");
module.exports = {
  createNoti: (IDBooking, callBack) => {
    pool.query(
      `insert into notification(CheckNotification, IDBooking) values(?,?)`,
      [false, IDBooking],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  updateNotification: (IDNotification, callBack) => {
    pool.query(
      `update notification set CheckNotification = ?  where IDNotification = ?`,
      [true, IDNotification],
      (error, results, fields) => {
        console.log(error, results, fields);
        if (error) {
          return callBack(error);
        }
        if (!results) {
          return res.json({
            success: 0,
            message: "Update failed",
          });
        }
        return callBack(null, results);
      }
    );
  },
};
