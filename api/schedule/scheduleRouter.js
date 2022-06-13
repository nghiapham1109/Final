const {
  createSchedule,
  getSchedule,
  getScheduleByIDPatient,
} = require("./scheduleController");
const { checkToken } = require("../../auth/token_validation");
const router = require("express").Router();
router.post("/", checkToken, createSchedule);
//
router.get("/", getSchedule);
//
router.get("/:IDPatient", checkToken, getScheduleByIDPatient);
module.exports = router;
