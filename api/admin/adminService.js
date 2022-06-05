const pool = require("../../config/database");
module.exports = {
  create: (data, callBack) => {
    pool.query(
      `insert into admin(IDAdmin, FullName, Email, Pw) values(?,?,?,?)`,
      [data.IDAdmin, data.FullName, data.Email, data.Pw],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  //
  getAdminByEmail: (email, callBack) => {
    pool.query(
      `select * from admin where Email = ?`,
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
  getAdminById: (id, callBack) => {
    pool.query(
      `select IDAdmin, FullName, Email, Pw from admin where IDAdmin = ?`,
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
