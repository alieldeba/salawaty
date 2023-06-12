const achievementModel = require("../models/achievementModel");

// @desc    Gets the achievement
// @route   GET /api/v1/achievement
// @access  Public
exports.getAchievements = async (req, res) => {
  const achievements = await achievementModel.find({});
  res.status(200).json(achievements);
};

// @desc    Gets the Stats
// @route   GET /api/v1/stats
// @access  Public
exports.getAchievement = async (req, res) => {
  const { id } = req.params;
  const achievements = await achievementModel.findById(id);
  res.status(200).json(achievements);
};

// @desc    Creates new achievement
// @route   POST /api/v1/achievement
// @access  Public
exports.createAchievement = async (req, res) => {
  const { title, day, prays } = req.body;

  await achievementModel
    .create({ title, day, prays })
    .then((stats) => {
      res.status(201).json(stats);
    })
    .catch((err) => {
      console.log(err);
    });
};

// @desc    Updates an existing achievement
// @route   PUT /api/v1/achievement
// @access  Private
exports.updateAchievement = async (req, res) => {
  const { title, day, prays } = req.body;
  const stats = await achievementModel.findOneAndUpdate(
    {},
    {
      title,
      day,
      prays,
    },
    { new: true }
  );
  res.status(302).json(stats);
};

// @desc    Deletes an achievement
// @route   DELETE /api/v1/achievements
// @access  Private
exports.deleteAchievement = async (req, res) => {
  const { id } = req.params;
  const achievement = await achievementModel.findByIdAndDelete(id);

  if (achievement === null) {
    return res.status(404).json({
      msg: "Achievement Not Found",
    });
  }

  res.status(200).json({
    status: 200,
    message: "Achievement deleted",
  });
};
