const {
  getDoctor,
  getDoctorById,
  createDoctor,
  login,
  getScheduleOfDoctorById,
  getDayBusyById,
} = require("./doctorController");
const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");
//
// router.get("/:IDDoctor", checkToken, getScheduleOfDoctorById);
//
router.get("/", getDoctor);
//
router.post("/", createDoctor);
//
router.get("/:IDDoctor", getDoctorById);
//
router.post("/login", login);

module.exports = router;
