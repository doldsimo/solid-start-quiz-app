// ~/ = /src/ , this configuration is in the jsoconfig.json
import Quiz from "~/model"
import "~/connection"
import { json } from "solid-start"
import { getJSONBody, handleError } from "~/utils"

// function for handling get requests to /api/quizes
export async function GET() {
    console.log("inside get quizes");
    // return all todos as json
    //console.log(json(await Quiz.find({}).catch(error => handleError(error))));
    return json(await Quiz.find({"type": "solid"}).catch(error => handleError(error)))
}