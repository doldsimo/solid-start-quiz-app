import Quiz from "solid-quiz";
import quiz from '../quiz/quiz.json';

const QuizPage = () => {

    // const [_, { Form }] = createRouteAction(async (formData) => {
    //     // CREATE REQUEST BODY
    //     const body = JSON.stringify({
    //         message: formData.get("message"),
    //         done: false,
    //     });
    //     // CREATE NEW TODO
    //     const response = await fetch("/api/quizes", {
    //         method: "POST",
    //         body,
    //     });
    //     // response payload
    //     const todos = await response.json();

    //     // pass todos to parents callback
    //     props.callback(todos);
    // });

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
        //<div style={{ "margin-left": "10em", "margin-right": "10em" }}>
        <Quiz quiz={quiz} allowBackJump onComplete={(e) => postResult(e)} />
        // </div>
    )
}


export default QuizPage;