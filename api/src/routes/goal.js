const express = require("express");
const {
  getAllgoals,
  getSingleGoal,
  addGoal,
  updateGoal,
  deleteGoal,
} = require("../controllers/goalController");

const router = express.Router();

router.get("/", getAllgoals);
router.get("/:id", getSingleGoal);
router.post("/", addGoal);
router.put("/:id", updateGoal);
router.delete("/:id", deleteGoal);

module.exports = router;
