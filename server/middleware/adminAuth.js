module.exports = (req, res, next) => {
  if (req.isAuthenticated()) {
    if (req.user.isAdmin) {
      return next();
    } else {
      return res.status(403).json("Access denied. Admin privileges required.");
    }
  } else {
    return res.status(403).json("You are not authenticated");
  }
};
