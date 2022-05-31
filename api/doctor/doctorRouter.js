const {
  getDoctor,
  getDoctorById,
  createDoctor,
  login,
  getScheduleOfDoctorById,
} = require("./doctorController");
const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");
router.get("/", getDoctor);
// router.get("/:IDDoctor", checkToken, getScheduleOfDoctorById);
router.post("/", checkToken, createDoctor);
router.get("/:IDDoctor", getDoctorById);
router.post("/login", login);

module.exports = router;
