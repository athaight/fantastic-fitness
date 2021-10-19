const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
 date: {
        type: Date,
        default: () => new Date()
    },
  exercises: [
      {
    type: {
        type: String,
        required: "Type"
    },
    name: {
        type: String,
        trim: true,
        required: "Name"
    },
    weight: {
        type: Number,
    },
    sets: {
        type: Number,
    },       
    reps: {
        type: Number,
    },
    duration: {
        type: Number,
    },
    },
]
});

workoutSchema.methods.setTotalDuration = function () {
    return this.exercises.reduce((total, exercise) => {
        return total + exercise.duration;
      }, 0);
    };
    
const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;