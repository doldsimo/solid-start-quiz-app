import { A } from "@solidjs/router"

const Home = () => {
  return (
    <div class="md:container md:mx-auto">
      <div style={{ display: "flex", "flex-direction": "column" }}>
        <h1 class="text-xl">
          Full stack solid start application, which uses solid-quiz.
        </h1>
        <div>
          <button className="btn" style={{ "margin-right": "1em" }}><A href="/quiz-user">Try out </A></button>
          <button className="btn btn-neutral"><A href="/quiz-results">Quiz results</A></button>
        </div>
      </div>
    </div>
  )
}

export default Home