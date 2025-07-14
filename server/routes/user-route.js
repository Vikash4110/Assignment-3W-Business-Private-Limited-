const express = require("express");
const router = express.Router();
const {
  initializeUsers,
  addUser,
  claimPoints,
  getLeaderboard,
  getClaimHistory,
} = require("../controllers/userController");
const { validateUserId, validateUserName } = require("../middlewares/validate");

router.get("/initialize", initializeUsers);
router.post("/add", validateUserName, addUser);
router.post("/claim", validateUserId, claimPoints);
router.get("/leaderboard", getLeaderboard);
router.get("/history", getClaimHistory);

module.exports = router;
