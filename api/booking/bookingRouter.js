const { login, getScheduleOfDoctorById } = require("./bookingController");
const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");
router.post("/login", login);
router.get("/:IDDoctor", checkToken, getScheduleOfDoctorById);

module.exports = router;
