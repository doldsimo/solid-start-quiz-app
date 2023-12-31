import Quiz from "solid-quiz";
import quizSolid from '../quiz/quiz-solid.json';
import quizProgramming from '../quiz/quiz-programming.json';
import { Show, createSignal } from "solid-js";

const QuizPage = () => {
    const tabs = ["Solid", "Programming"];
    const [activeTab, setActiveTab] = createSignal(0);
    const [userName, setUserName] = createSignal("Anonym");

    const postResult = async (e, type) => {
        console.log(e);
        const points = e.points.resultSum;
        const response = await fetch("/api/quizes", {
            method: "POST",
            body: JSON.stringify({
                name: userName(),
                type: type,
                points: points
            })
        });
    }

    return (
        <div style={{ display: "flex", "flex-direction": "column" }}>
            <div class="md:container md:mx-auto" style={{ "margin-bottom": "1.5em" }}>
                <p class="text-xl">Select one of the following quiz topics:</p>
            </div>
            <div>
                <div style={{ display: "flex", "margin-bottom": "1em" }} class="justify-center tabs">
                    <For each={tabs}>{(tab, index) =>
                        <button class={index() === activeTab() ? "tab tab-lifted tab-active " : "tab tab-lifted"} onClick={() => setActiveTab(index)}>{tab}</button>}
                    </For>
                </div>
                <div style={{ display: "flex", "margin-bottom": "1em" }} class="justify-center">
                    <input type="text" placeholder="Your username" className="input input-bordered input-md w-full max-w-xs" style={{ "margin-right": "1em" }} onKeyUp={(e) => setUserName(e.target.value)} />
                </div>
                <div>
                    <Switch>
                        <Match when={activeTab() === 0} >
                            <Quiz quizStartButton="Solidjs Quiz" quiz={quizSolid} allowBackJump onComplete={(e) => postResult(e, "solid")} />
                        </Match>
                        <Match when={activeTab() === 1} >
                            <Quiz quizStartButton="Programming Quiz" quiz={quizProgramming} allowBackJump onComplete={(e) => postResult(e, "programming")} />
                        </Match>
                    </Switch>
                </div>
            </div>
            {/* <Quiz quiz={quizSolid} allowBackJump onComplete={(e) => postResult(e)} /> */}

        </div>

    )
}


export default QuizPage;