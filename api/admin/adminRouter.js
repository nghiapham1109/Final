const {
  createAdmin,
  login,
  getAdminById,
  updateDoctor,
  getDoctorById,
  getDoctor,
  getDisease,
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
router.get("/disease", checkToken, getDisease);
//
router.get("/:IDDoctor", checkToken, getDoctorById);
//
router.put("/:IDDoctor", checkToken, updateDoctor);
//

module.exports = router;
