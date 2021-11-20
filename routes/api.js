const router = require("express").Router();
const workout = require("../models/workout.js");

router.post("/api/workout", ({ body }, res) => {
    Workout.create(body)
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });
  
router.put("/api/workouts/:id", (req, res) => {
  workout.updateOne({ _id: req.params.id }, { $push: { exercises: req.body } })
    .then((data) => {
      console.log(data);
      res.json(data);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.get("/api/workouts", (req, res) => {
    workout.find({})
      .sort({ date: -1 })
      .then(dbWorkout => {
          console.log(dbWorkout);
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

  router.get("/api/workouts/range", (req, res) => {
    workout.aggregate([
      {
        $addFields: {
          total_duration: { $sum: "$exercises.duration" },
        },
      },
    ]).then((data) => {
      res.json(data);
    });
  });
  
  module.exports = router;