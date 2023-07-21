// ~/ = /src/ , this configuration is in the jsoconfig.json
import Quiz from "~/model"
import "~/connection"
import { json } from "solid-start"
import { getJSONBody, handleError } from "~/utils"

// function for handling get requests to /api/quizes/programming
export async function GET() {
    console.log("inside get quizes");
    return json(await Quiz.find({"type": "programming"}).catch(error => handleError(error)))
}