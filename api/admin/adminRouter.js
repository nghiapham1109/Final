const {
  createAdmin,
  login,
  getAdminById,
  updateDoctor,
  getDoctorById,
  getDoctor,
  getDisease,
  deleteDoctor,
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
router.delete("/:IDDoctor", checkToken, deleteDoctor);
//

module.exports = router;
