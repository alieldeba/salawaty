const express = require("express");
const { getAchievements, createAchievement, updateAchievement, getAchievement, deleteAchievement } = require("../controllers/achievementsController");


const router = express.Router();

router.route("/").get(getAchievements).post(createAchievement)
router.route("/:id").get(getAchievement).put(updateAchievement).delete(deleteAchievement)

module.exports = router;
