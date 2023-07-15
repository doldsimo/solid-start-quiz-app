// ~/ = /src/ , this configuration is in the jsoconfig.json
import Quiz from "~/routes/api/quizes/model"
import { json } from "solid-start"
import { getJSONBody, handleError } from "~/utils"

// function for handling get requests to /api/quizes
export async function GET() {
    console.log("inside get quizes");
    // return all todos as json
    console.log(json(await Quiz.find({}).catch(error => handleError(error))));
    return json(await Quiz.find({}).catch(error => handleError(error)))
}

export async function POST({ request }) {
    // get json body
    const body = await getJSONBody(request.body)
    const body2 = {"name": "Testname",
        "points": 10,
        "date": "01.02.1999"}
    console.log("body: ", body);
    console.log("body2: ", body2);
    // create new todo in database
    await Quiz.create(body2).catch(error => handleError(error))
    // return all todos as json
    return json(await Quiz.find({}).catch(error => handleError(error)))
}