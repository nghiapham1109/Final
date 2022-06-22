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
  create: (data, callBack) => {
    pool.query(
      `insert into doctor(IDDoctor, NameDoctor, DayOfBirth, Sex, Phone, HomeAddress, Specialist, Hospital, HospitalAddress, Image, Email,Pw, IDAdmin) values(?,?,?,?,?,?,?,?,?,?,?,?,?)`,
      [
        data.IDDoctor,
        data.NameDoctor,
        data.DayOfBirth,
        data.sex,
        data.Phone,
        data.HomeAddress,
        data.Specialist,
        data.Hospital,
        data.HospitalAddress,
        data.Image,
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
  getScheduleOfDoctorById: (id, callBack) => {
    pool.query(
      `select IDBooking, TimeBooking, Note, IDDoctor, IDPatient, DayBooking from booking where IDDoctor = ?`,
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
  getScheduleOfDoctorById: (id, callBack) => {
    pool.query(
      `select IDBooking, TimeBooking, Note, IDDoctor, IDPatient, DayBooking from booking where IDDoctor = ?`,
      [id],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  getBusyDayOfDoctorById: (id, callBack) => {
    pool.query(
      `select daybusy.* from daybusy where IDDoctor = ?`,
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
  getDoctorBySpecialist: (Specialist, callBack) => {
    pool.query(
      `select * from doctor where Specialist = ?`,
      [Specialist],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  //
  getNotificationOfDoctorById: (id, callBack) => {
    pool.query(
      `select booking.TimeBooking, booking.DayBooking, booking.IDDoctor, notification.*, patient.NamePatient from booking inner join notification on booking.IDBooking=notification.IDBooking join patient on booking.IDPatient = patient.IDPatient where IDDoctor = ?`,
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
