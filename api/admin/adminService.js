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
  updateDoctor: (data, IDDoctor, IDAdmin, callBack) => {
    console.log("service", data.nameDoctor);

    pool.query(
      `update doctor set NameDoctor = ?, DayOfBirth = ?, sex = ?, Phone = ?, HomeAddress = ?, Specialist = ?, Hospital = ?, HospitalAddress = ?, Image = ?, Email = ?, Pw = ?, IDAdmin = ? where IDDoctor = ?`,
      [
        data.nameDoctor,
        data.dayOfBirth,
        data.sex,
        data.phone,
        data.homeAddress,
        data.specialist,
        data.hospital,
        data.homeAddress,
        data.image,
        data.email,
        data.password,
        IDAdmin,
        IDDoctor,
      ],
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
