const {
  getDoctor,
  getDoctorById,
  createDoctor,
  login,
  getScheduleOfDoctorById,
  getBusyDayOfDoctorById,
  getDoctorBySpecialist,
  getNotificationOfDoctorById,
} = require("./doctorController");
const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");
//
router.get("/notification/:IDDoctor", checkToken, getNotificationOfDoctorById);
//
router.get("/daybusy/:IDDoctor", checkToken, getBusyDayOfDoctorById);
//
router.get("/specialist/:Specialist", getDoctorBySpecialist);
//
router.get("/", getDoctor);
//
router.post("/", createDoctor);
//
router.get("/:IDDoctor", getDoctorById);
//
router.post("/login", login);

module.exports = router;
