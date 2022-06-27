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
      `select patient.NamePatient,patient.Phone, booking.* from patient inner join booking on patient.IDPatient=booking.IDPatient where IDDoctor = ?`,
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
