const {
  createAdmin,
  login,
  getAdminById,
  updateDoctor,
  getDoctorById,
  getDoctor,
} = require("./adminController");
const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");
// router.get("/:IDDoctor", checkToken, getScheduleOfDoctorById);
router.post("/", createAdmin);
//
router.post("/login", login);
//
// router.get("/:IDAdmin", checkToken, getAdminById);
//
router.get("/", checkToken, getDoctor);
//
router.get("/:IDDoctor", checkToken, getDoctorById);
//
router.patch("/", checkToken, updateDoctor);
//
module.exports = router;
