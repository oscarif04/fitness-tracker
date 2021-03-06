const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now()
    },
    exercises: [
        {
            name: {
                type: String,
                required: "Enter workout name:"
            },
            type: {
                type: String,
                required: "Enter workout type:"
            },
            duration: {
                type: Number
            },
            distance: {
                type: Number
            },
            weight: {
                type: Number
            },
            reps: {
                type: Number
            },
            sets: {
                type: Number
            },
        }
    ],
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;