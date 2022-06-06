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
  //
  getDoctor: (callBack) => {
    pool.query(
      `select IDDoctor, NameDoctor, DayOfBirth, sex, Phone, HomeAddress, Specialist, Hospital, HospitalAddress, Image, Email, Pw, IDAdmin from doctor`,
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
  getDoctorById: (id, callBack) => {
    pool.query(
      `select IDDoctor, NameDoctor, DayOfBirth, sex, Phone, HomeAddress, Specialist, Hospital, HospitalAddress, Image, Email, Pw, IDAdmin from doctor where IDDoctor = ?`,
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
  updateDoctor: (data, IDAdmin, callBack) => {
    pool.query(
      `update doctor set NameDoctor = ?, DayOfBirth = ?, sex = ?, Phone = ?, HomeAddress = ?, Specialist = ?, Hospital = ?, HospitalAddress = ?, Image = ?, Email = ?, Pw = ?, IDAdmin = ? where IDDoctor = ?`,
      [
        data.NameDoctor,
        data.DayOfBirth,
        data.sex,
        data.Phone,
        data.HomeAddress,
        data.Specialist,
        data.Hospital,
        data.HomeAddress,
        data.Image,
        data.Email,
        data.Pw,
        IDAdmin,
        data.IDDoctor,
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
};
