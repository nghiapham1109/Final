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
  getDayBusyByIdDoctor: (id, callBack) => {
    pool.query(
      `select IDDayBusy, TimeBusy, DayBusy, Note from daybusy where IDDoctor = ?`,
      [id],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  //
  getInfoById: (id, callBack) => {
    pool.query(
      `select IDDayBusy, TimeBusy, DayBusy, Note from daybusy where IDDayBusy = ?`,
      [id],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  //
  updateDayBusy: (data, IDDayBusy, IDDoctor, callBack) => {
    console.log("service", IDDoctor);
    pool.query(
      `update daybusy set TimeBusy = ?, DayBusy = ?, Note = ?, IDDoctor = ? where IDDayBusy = ?`,
      [data.timeBusy, data.dayBusy, data.note, IDDoctor, IDDayBusy],
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
  //
  deleteDayBusy: (IDDayBusy, callBack) => {
    pool.query(
      `delete from daybusy where IDDayBusy = ?`,
      [IDDayBusy],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  //
  createDayBusy: (data, IDDoctor, callBack) => {
    pool.query(
      `insert into daybusy(IDDayBusy, TimeBusy, DayBusy, Note, IDDoctor) values(?,?,?,?,?)`,
      [data.IDDayBusy, data.timeBusy, data.dayBusy, data.note, IDDoctor],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};
