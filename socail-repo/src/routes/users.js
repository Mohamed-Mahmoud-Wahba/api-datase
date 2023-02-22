const express = require("express");
const UserRepo = require('../repos/user-repo');
const router = express.Router();
router.get("/users", async (req, res) => {
  const users = await UserRepo.find();
  res.send(users);
});
router.get("/users/:id", async (req, res) => {
  const { id } = req.params;
  const user = await UserRepo.findById(id);
  if (user) {
    res.send(user);
  } else {
    res.sendStatus(404);
  }
});
router.post("/users", async (req, res) => {
  const { usernames, bio } = req.body;
  const user = await UserRepo.insert(usernames, bio);
  res.send(user);
});
router.put("/users/:id", async (req, res) => {
  const { id } = req.params;
  const { usernames, bio } = req.body;
  const user = await UserRepo.update(id, usernames, bio);
  if (user) {
     res.send(user);
  } else {
    res.sendStatus(404);
  }
});
router.delete("/users/:id", async (req, res) => {
  const { id } = req.params;
  const user = await UserRepo.delete(id);
    if (user) {
      res.send(user);
    } else {
      res.sendStatus(404);
    }
});
module.exports = router;
