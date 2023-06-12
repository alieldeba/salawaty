const statsModel = require("../models/statsModel");

// @desc    Gets the Stats
// @route   GET /api/v1/stats
// @access  Public
exports.getStats = async (req, res) => {
  const stats = await statsModel.find({});
  res.status(200).json(stats);
};

// exports.createStats = async (req, res, next) => {
//   const { days } = req.body;

//   await statsModel
//     .create({ days, prays: days * 5 })
//     .then((stats) => {
//       res.status(201).json(stats);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

// @desc    Gets the Stats
// @route   PUT /api/v1/stats
// @access  Private
exports.updateStats = async (req, res, next) => {
  const { days } = req.body;
  const stats = await statsModel.findOneAndUpdate(
    {},
    {
      days,
      prays: days * 5,
    },
    { new: true }
  );
  res.status(302).json(stats);
};
