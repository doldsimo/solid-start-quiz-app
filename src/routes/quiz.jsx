import Quiz from "solid-quiz";
import quiz from '../quiz/quiz.json';

const QuizPage = () => {
    return (
        <div style={{ "margin-left": "10em", "margin-right": "10em" }}>
            <Quiz quiz={quiz} />
        </div>
    )
}

export default QuizPage;