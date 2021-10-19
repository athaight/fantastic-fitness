const express = require("express");
const router = express.Router();
const Workout = require("../models/workout.js");

router.get("/api/workouts/range", (req, res) => {
    Workout.find({})
      .then(workout_db => {
        res.json(workout_db);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

router.get("/api/workouts", (req, res) => {
  Workout.find({})
    .then(workout_db => {
      res.json(workout_db);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.post("/api/workouts", ({ body }, res) => {
    Workout.create(body)
      .then(workout_db => {
        res.json(workout_db);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

  router.put("/api/workouts/:id", ({ body, params }, res) => {
    Workout.findOneAndUpdate(
      params.id,
      { $push: { exercises: body } },
  
      { new: true, runValidators: true }
    )
      .then(workout_db => {
        res.json(workout_db);
      })
      .catch(err => {
        res.json(err);
      });
  });
  module.exports = router;