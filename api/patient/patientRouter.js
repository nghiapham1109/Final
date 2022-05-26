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
const bodyParser = require("body-parser");
router.post("/", checkToken, createPatient);
router.get("/", checkToken, getPatient);
router.get("/:IDPatient", checkToken, getPatientById);
router.patch("/", checkToken, updatePatient);
router.delete("/", checkToken, deletePatient);
router.post("/login", login);

module.exports = router;
