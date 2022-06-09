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
  createDoctor: (data, IDAdmin, callBack) => {
    pool.query(
      `insert into doctor(IDDoctor, NameDoctor, DayOfBirth, Sex, Phone, HomeAddress, Specialist, Hospital, HospitalAddress, Image, Email,Pw, IDAdmin) values(?,?,?,?,?,?,?,?,?,?,?,?,?)`,
      [
        data.IDDoctor,
        data.nameDoctor,
        data.dayOfBirth,
        data.sex,
        data.phone,
        data.homeAddress,
        data.specialist,
        data.hospital,
        data.hospitalAddress,
        data.image,
        data.email,
        data.password,
        IDAdmin,
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
  //
  deleteDoctor: (IDDoctor, callBack) => {
    pool.query(
      `delete from doctor where IDDoctor = ?`,
      [IDDoctor],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  //
  getDisease: (callBack) => {
    pool.query(
      `select IDDisease, NameDisease, Decription, Symptoms, Cause, Risk, Complication, Preparing, Tests, Treatment, LifeStyle, Prevention, IDAdmin from disease`,
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
  getDiseaseById: (id, callBack) => {
    pool.query(
      `select IDDisease, NameDisease, Decription, Symptoms, Cause, Risk, Complication, Preparing, Tests, Treatment, LifeStyle, Prevention, IDAdmin from disease where IDDisease = ?`,
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
  updateDisease: (data, IDDisease, IDAdmin, callBack) => {
    pool.query(
      `update disease set NameDisease = ?, Decription = ?, Symptoms = ?, Cause = ?, Risk = ?, Complication = ?, Preparing = ?, Tests = ?, Treatment = ?, LifeStyle = ?, Prevention = ?, IDAdmin = ? where IDDisease = ?`,
      [
        data.nameDisease,
        data.decription,
        data.symptoms,
        data.cause,
        data.risk,
        data.complication,
        data.preparing,
        data.tests,
        data.treatment,
        data.lifeStyle,
        data.prevention,
        IDAdmin,
        IDDisease,
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
  //
  deleteDisease: (IDDisease, callBack) => {
    pool.query(
      `delete from disease where IDDisease = ?`,
      [IDDisease],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  //
  createDisease: (data, IDAdmin, callBack) => {
    pool.query(
      `insert into disease(IDDisease, NameDisease, Decription, Symptoms, Cause, Risk, Complication, Preparing, Tests, Treatment, LifeStyle, Prevention, IDAdmin) values(?,?,?,?,?,?,?,?,?,?,?,?,?)`,
      [
        data.IDDisease,
        data.nameDisease,
        data.decription,
        data.symptoms,
        data.cause,
        data.risk,
        data.complication,
        data.preparing,
        data.tests,
        data.treatment,
        data.lifeStyle,
        data.prevention,
        IDAdmin,
      ],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};
