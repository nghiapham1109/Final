const { createAdmin, login, getAdminById } = require("./adminController");
const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");
// router.get("/:IDDoctor", checkToken, getScheduleOfDoctorById);
router.post("/", createAdmin);
router.post("/login", login);
router.get("/:IDAdmin", checkToken, getAdminById);
module.exports = router;
