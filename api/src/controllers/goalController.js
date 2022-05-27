const Goal = require("../models/Goal");

const getAllgoals = async (req, res) => {
  try {
    const goals = await Goal.find();
    if (!goals) {
      return res.status(404).json({
        message: "No goals found",
      });
    }
    return res.status(200).json({
      data: goals,
      message: "goals fetched successfully",
      status: 200,
      success: true,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
    });
  }
  return res.status(200).json({
    message: "get all goals",
  });
};

const getSingleGoal = async (req, res) => {
  try {
    const goal = await Goal.findById(req.params.id);
    if (!goal) {
      return res.status(404).json({
        message: "No goal found",
      });
    }
    return res.status(200).json({
      message: "goal details fetched successfully",
      data: goal,
      status: 200,
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

const addGoal = async (req, res) => {
  if (!req.body.text) {
    return res.status(400).json({
      message: "Bad Request",
    });
  }
  try {
    const goal = await Goal.create(req.body);
    return res.status(201).json({
      message: "Goal added successfully",
      data: goal,
      status: 201,
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

const updateGoal = async (req, res) => {
  const goal = await Goal.findById(req.params.id);
  if (!goal) {
    return res.status(404).json({
      message: "No goal found",
    });
  }
  try {
    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    return res.status(200).json({
      message: "Goal updated successfully",
      data: updatedGoal,
      status: 200,
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

const deleteGoal = async (req, res) => {
  const goal = await Goal.findById(req.params.id);
  if (!goal) {
    return res.status(404).json({
      message: "No goal found",
    });
  }
  try {
    await goal.remove();
    return res.status(200).json({
      message: "Goal deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

module.exports = {
  getAllgoals,
  getSingleGoal,
  addGoal,
  updateGoal,
  deleteGoal,
};
