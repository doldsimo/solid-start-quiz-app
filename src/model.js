import mongoose from "mongoose"

// quiz model
const quizSchema = mongoose.Schema({
    name: { type: String, required: true },
    points: { type: String, required: true },
    type: { type: String, required: true },
    date: { type: String, required: true }
})


// quiz model
const Quiz = mongoose.models.Quiz || mongoose.model("Quiz", quizSchema);

export default Quiz