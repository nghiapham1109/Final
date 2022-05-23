const { getDoctor } = require("./doctorController");
const router = require("express").Router();
router.get("/", getDoctor);

module.exports = router;
