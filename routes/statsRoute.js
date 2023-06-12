const express = require("express");
const {
  getStats,
  updateStats,
  //   createStats,
} = require("../controllers/statsController");

const router = express.Router();

router.route("/").get(getStats).put(updateStats);
// .post(createStats)

module.exports = router;
