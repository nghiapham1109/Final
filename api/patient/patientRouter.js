const {
  createPatient,
  getPatient,
  getPatientById,
  updatePatient,
  deletePatient,
} = require("./patientController");
const router = require("express").Router();
router.post("/", createPatient);
router.get("/", getPatient);
router.get("/:IDPatient", getPatientById);
router.patch("/", updatePatient);
router.delete("/", deletePatient);

module.exports = router;
