const { createSchedule, getSchedule } = require("./scheduleController");
const router = require("express").Router();
router.post("/", createSchedule);
router.get("/", getSchedule);
module.exports = router;
