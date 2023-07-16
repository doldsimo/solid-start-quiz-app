// ~/ = /src/ , this configuration is in the jsoconfig.json
import Quiz from "~/model"
import "~/connection"
import { json } from "solid-start"
import { getJSONBody, handleError } from "~/utils"

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