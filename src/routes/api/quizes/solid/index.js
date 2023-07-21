// ~/ = /src/ , this configuration is in the jsoconfig.json
import Quiz from "~/model"
import "~/connection"
import { json } from "solid-start"
import { getJSONBody, handleError } from "~/utils"

// function for handling get requests to /api/quizes/solid
export async function GET() {
    return json(await Quiz.find({"type": "solid"}).catch(error => handleError(error)))
}