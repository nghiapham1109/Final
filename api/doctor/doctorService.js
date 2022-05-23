const pool = require("../../config/database");
module.exports = {
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
};
