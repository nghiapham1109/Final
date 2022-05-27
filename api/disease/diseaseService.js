const pool = require("../../config/database");
module.exports = {
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
};
