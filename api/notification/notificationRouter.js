const { updateNotification } = require("./notifcationController");
const router = require("express").Router();
router.put("/updateNotification/:IDNotification", updateNotification);
module.exports = router;
