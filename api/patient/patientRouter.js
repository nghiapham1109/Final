const {
  createPatient,
  getPatient,
  getPatientById,
  updatePatient,
  deletePatient,
  login,
} = require("./patientController");
const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");
router.post("/", createPatient);
router.get("/", checkToken, getPatient);
router.get("/:IDPatient", checkToken, getPatientById);
router.put("/:IDPatient", checkToken, updatePatient);
router.delete("/", checkToken, deletePatient);
router.post("/login", login);

module.exports = router;
