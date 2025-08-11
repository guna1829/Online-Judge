const router = require("express").Router();
const passport = require("passport");
const adminAuth = require("../middleware/adminAuth");
const User = require("../models/User");

// Auth related
router.get(
  "/google",
  passport.authenticate("google", { 
    scope: ["profile", "email"],
    prompt: 'select_account'  // This forces Google to show account selection
  })
);

// Force new login with account selection
router.get(
  "/google/force",
  passport.authenticate("google", { 
    scope: ["profile", "email"],
    prompt: 'select_account',
    access_type: 'offline'  // This ensures fresh token
  })
);

router.get("/success", (req, res) => {
  res.status(200).json(req.user);
});

router.get("/logout", (req, res) => {
  req.logout((err) => {
    if (err) {
      return res.status(500).json({ error: "Logout failed" });
    }
    // Clear session
    req.session.destroy((err) => {
      if (err) {
        return res.status(500).json({ error: "Session destruction failed" });
      }
      // Clear the session cookie
      res.clearCookie('connect.sid');
      return res.status(200).json({ message: "Logged out successfully" });
    });
  });
});

router.get("/me", (req, res) => {
  if (req.isAuthenticated()) {
    res.status(200).json(req.user);
  } else {
    res.status(401).json({ message: "Not authenticated" });
  }
});

// Admin only routes
router.get("/users", adminAuth, async (req, res) => {
  try {
    const users = await User.find({}, { googleId: 0 }); // Exclude sensitive data
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Error fetching users" });
  }
});

router.put("/users/:userId/toggle-admin", adminAuth, async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await User.findById(userId);
    
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    
    // Prevent admin from removing their own admin status
    if (user._id.toString() === req.user._id.toString()) {
      return res.status(400).json({ message: "Cannot modify your own admin status" });
    }
    
    user.isAdmin = !user.isAdmin;
    await user.save();
    
    res.status(200).json({ 
      message: `User ${user.displayName} is now ${user.isAdmin ? 'an admin' : 'a regular user'}`,
      user: { _id: user._id, displayName: user.displayName, email: user.email, isAdmin: user.isAdmin }
    });
  } catch (error) {
    res.status(500).json({ message: "Error updating user admin status" });
  }
});

module.exports = router;
