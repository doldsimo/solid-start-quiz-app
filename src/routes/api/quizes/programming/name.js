// ~/ = /src/ , this configuration is in the jsoconfig.json
import Quiz from "~/model"
import "~/connection"
import { json } from "solid-start"
import { getJSONBody, handleError } from "~/utils"

export async function GET() {
    return json(await Quiz.find({"type": "programming"}).sort({ name: 1 }).catch(error => handleError(error)))
}
