const validateUserId = (req, res, next) => {
  const { userId } = req.body;
  if (!userId || !/^[0-9a-fA-F]{24}$/.test(userId)) {
    return res.status(400).json({ error: "Invalid user ID" });
  }
  next();
};

const validateUserName = (req, res, next) => {
  const { name } = req.body;
  if (!name || name.trim().length < 2) {
    return res
      .status(400)
      .json({ error: "Name must be at least 2 characters long" });
  }
  next();
};

module.exports = { validateUserId, validateUserName };
