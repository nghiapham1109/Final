const {
  createAdmin,
  login,
  getAdminById,
  updateDoctor,
  getDoctorById,
  getDoctor,
  getDisease,
  deleteDoctor,
  createDoctor,
  getDiseaseById,
  updateDisease,
} = require("./adminController");
const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");
// router.get("/:IDDoctor", checkToken, getScheduleOfDoctorById);
// router.post("/", createAdmin);
//
router.post("/login", login);
//
// router.get("/:IDAdmin", checkToken, getAdminById);
//
router.post("/", checkToken, createDoctor);
//
router.get("/disease", checkToken, getDisease);
//
router.get("/disease/:IDDisease", checkToken, getDiseaseById);
//
router.put("/disease/:IDDisease", checkToken, updateDisease);
//
router.get("/", checkToken, getDoctor);
//
router.get("/:IDDoctor", checkToken, getDoctorById);
//
router.put("/:IDDoctor", checkToken, updateDoctor);
//
router.delete("/:IDDoctor", checkToken, deleteDoctor);
//
module.exports = router;
