const pool = require("../../config/database");

module.exports = {
  create: (data, callBack) => {
    pool.query(
      `insert into booking(TimeBooking, Note, IDPatient, IDDoctor) values(?,?,?,?)`,
      [
        data.TimeBooking,
        data.Note,
        data.IDPatient,
        data.IDDoctor,
      ],
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
      `select IDBooking, TimeBooking, Note, IDPatient, IDDoctor from booking`,
      [],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};
