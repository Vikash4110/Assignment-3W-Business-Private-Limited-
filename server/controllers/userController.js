const User = require("../models/User");
const ClaimHistory = require("../models/ClaimHistory");

const initializeUsers = async (req, res) => {
  try {
    const defaultUsers = [
      "Rahul",
      "Kamal",
      "Sanak",
      "Priya",
      "Vikram",
      "Anita",
      "Ravi",
      "Neha",
      "Suresh",
      "Deepa",
    ];
    await User.deleteMany({});
    const users = await User.insertMany(defaultUsers.map((name) => ({ name })));
    res.status(201).json(users);
  } catch (error) {
    res.status(500).json({ error: "Failed to initialize users" });
  }
};

const addUser = async (req, res) => {
  try {
    const { name } = req.body;
    const user = new User({ name });
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: "Failed to add user" });
  }
};

const claimPoints = async (req, res) => {
  try {
    const { userId } = req.body;
    const points = Math.floor(Math.random() * 10) + 1;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    user.totalPoints += points;
    await user.save();

    const history = new ClaimHistory({ userId, points });
    await history.save();

    res.status(200).json({ user, points });
  } catch (error) {
    res.status(500).json({ error: "Failed to claim points" });
  }
};

const getLeaderboard = async (req, res) => {
  try {
    const users = await User.find().sort({ totalPoints: -1 });
    const leaderboard = users.map((user, index) => ({
      rank: index + 1,
      name: user.name,
      totalPoints: user.totalPoints,
      id: user._id,
    }));
    res.status(200).json(leaderboard);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch leaderboard" });
  }
};

const getClaimHistory = async (req, res) => {
  try {
    const history = await ClaimHistory.find()
      .populate("userId", "name")
      .sort({ createdAt: -1 });
    res.status(200).json(history);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch claim history" });
  }
};

module.exports = {
  initializeUsers,
  addUser,
  claimPoints,
  getLeaderboard,
  getClaimHistory,
};
