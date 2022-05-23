const { getDoctor, getDoctorById } = require("./doctorController");
const router = require("express").Router();
router.get("/", getDoctor);
router.get("/:IDDoctor", getDoctorById);

module.exports = router;
