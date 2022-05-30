const { createSchedule, getSchedule } = require("./scheduleController");
const { checkToken } = require("../../auth/token_validation");
const router = require("express").Router();
router.post("/", checkToken, createSchedule);
router.get("/", getSchedule);
module.exports = router;
