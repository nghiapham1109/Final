const pool = require("../../config/database");

module.exports = {
  create: (data, callBack) => {
    pool.query(
      `insert into patient(NamePatient, DayOfBirth, Sex, Phone, HomeAddress, Email, Pw, IDAdmin) values(?,?,?,?,?,?,?,?)`,
      [
        data.NamePatient,
        data.DayOfBirth,
        data.Sex,
        data.Phone,
        data.HomeAddress,
        data.Email,
        data.Pw,
        data.IDAdmin,
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
  getPatient: (callBack) => {
    pool.query(
      `select IDPatient, NamePatient, DayOfBirth, Sex, Phone, HomeAddress, Email, Pw, IDAdmin from patient`,
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
  getPatientById: (id, callBack) => {
    pool.query(
      `select IDPatient, NamePatient, DayOfBirth, Sex, Phone, HomeAddress, Email, Pw, IDAdmin from patient where IDPatient = ?`,
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
  updatePatient: (data, callBack) => {
    pool.query(
      `update patient set NamePatient = ?, DayOfBirth = ?, Sex = ?, Phone = ?, HomeAddress = ?, Email = ?, Pw = ?, IDAdmin = ? where IDPatient = ?`,
      [
        data.IDPatient,
        data.NamePatient,
        data.DayOfBirth,
        data.Sex,
        data.Phone,
        data.HomeAddress,
        data.Email,
        data.Pw,
        data.IDAdmin,
      ],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        if (!results) {
          return res.json({
            success: 0,
            message: "Update failed",
          });
        }
        return callBack(null, results[0]);
      }
    );
  },
  //
  deletePatient: (data, callBack) => {
    pool.query(`delete from patient where IDPatient = ?`, [data.IDPatient]),
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results[0]);
      };
  },
  //
  getPatientByEmail: (email, callBack) => {
    pool.query(
      `select * from patient where Email = ?`,
      [email],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
};
