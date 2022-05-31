const pool = require("../../config/database");
module.exports = {
  //
  getDoctorByEmail: (email, callBack) => {
    pool.query(
      `select * from doctor where Email = ?`,
      [email],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  //
  getScheduleOfDoctorById: (id, callBack) => {
    pool.query(
      `select IDBooking, TimeBooking, Note, IDDoctor, IDPatient, DayBooking from booking where IDDoctor = ?`,
      [id],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};
