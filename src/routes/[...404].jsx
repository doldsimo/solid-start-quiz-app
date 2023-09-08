import { Title } from "solid-start";
import { HttpStatusCode } from "solid-start/server";
export default function NotFound() {
  return (
    <div class="md:container md:mx-auto">
      <Title>Not Found</Title>
      <HttpStatusCode code={404} />
      <h1>Page Not Found</h1>
    </div>
  );
}
