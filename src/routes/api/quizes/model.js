import mongoose from "mongoose"

// quiz model
const quizSchema = mongoose.Schema({
    name: String,
    points: Boolean,
    date: Date
}, { timeStamps: true })

// OUR quiz model
const Quiz = mongoose.models.Quiz ||mongoose.model("Quiz", quizSchema);

export default Quiz