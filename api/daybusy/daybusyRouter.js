const {
  login,
  getDayBusyByIdDoctor,
  getInfoById,
  updateDayBusy,
  deleteDayBusy,
  createDayBusy,
} = require("./daybusyController");
const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");
//
router.get("/info/:IDDayBusy", checkToken, getInfoById);
//
router.put("/update/:IDDayBusy", checkToken, updateDayBusy);
//
router.delete("/delete/:IDDayBusy", checkToken, deleteDayBusy);
//
router.post("/create", checkToken, createDayBusy);
//
router.get("/:IDDoctor", checkToken, getDayBusyByIdDoctor);
//
router.post("/login", login);

module.exports = router;
