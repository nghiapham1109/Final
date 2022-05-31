const {
  getDoctor,
  getDoctorById,
  createDoctor,
  login,
} = require("./doctorController");
const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");
router.get("/", getDoctor);
router.post("/", checkToken, createDoctor);
router.get("/:IDDoctor", getDoctorById);
router.post("/login", login);

module.exports = router;
