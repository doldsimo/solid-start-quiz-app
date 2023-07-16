import Quiz from "solid-quiz";
import quiz from '../quiz/quiz.json';

const QuizPage = () => {
    const postResult = async (e) => {
        console.log(e);
        const points = e.points.resultSum;
        const response = await fetch("/api/quizes", {
            method: "POST",
            body: JSON.stringify({
                name: "Anonym",
                type: "solid",
                points: points
            })
        });

    }

    return (
        <Quiz quiz={quiz} allowBackJump onComplete={(e) => postResult(e)} />
    )
}


export default QuizPage;