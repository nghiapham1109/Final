const { getDisease, getDiseaseById } = require("./diseaseController");
const router = require("express").Router();
router.get("/", getDisease);
router.get("/:IDDisease", getDiseaseById);
module.exports = router;
