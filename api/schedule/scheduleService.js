const pool = require("../../config/database");

module.exports = {
  create: (data, IDPatient, callBack) => {
    pool.query(
      `insert into booking(TimeBooking, Note, IDPatient, IDDoctor, DayBooking) values(?,?,?,?,?)`,
      [data.TimeBooking, data.Note, IDPatient, data.IDDoctor, data.DayBooking],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  //
  getSchedule: (callBack) => {
    pool.query(
      `select IDBooking, TimeBooking, Note, IDPatient, IDDoctor, DayBooking from booking`,
      [],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  //
  getScheduleByIDPatient: (id, callBack) => {
    pool.query(
      `select doctor.NameDoctor, booking.* from doctor inner join booking on doctor.IDDoctor=booking.IDDoctor where IDPatient = ?`,
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
