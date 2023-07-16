// ~/ = /src/ , this configuration is in the jsoconfig.json
import Quiz from "~/routes/api/quizes/model"
import "~/connection"
import { json } from "solid-start"
import { getJSONBody, handleError } from "~/utils"

// function for handling get requests to /api/quizes
export async function GET() {
    console.log("inside get quizes");
    // return all todos as json
    //console.log(json(await Quiz.find({}).catch(error => handleError(error))));
    return json(await Quiz.find({}).catch(error => handleError(error)))
}

export async function POST({ request }) {
    // get json body
    const body = await getJSONBody(request.body)
    console.log("body: ", body);


    // create new todo in database
    // await Quiz.create({ ...body2, date: new Date().toISOString() }).catch(error => handleError(error));
    const newQuiz = new Quiz({ ...body, date: new Date().toISOString() });
    await newQuiz.save();
    // return all todos as json
    // console.log(json(await Quiz.find({}).catch(error => handleError(error))));
    return json(await Quiz.find({}).catch(error => handleError(error)))
}