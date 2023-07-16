
import CreateTodos from "~/components/create-todos";
import { useRouteData } from "solid-start";
import ResultTable from "~/components/ResultTable/ResultTable";
import { createResource } from "solid-js";

export function routeData() {
  const [data] = createResource(async () => {
    const response = await fetch("/api/quizes/solid");
    return await response.json();
  });
  return { data };
}

export default function Home() {
  const { data } = useRouteData()

  return (
    <div class="md:container md:mx-auto">
      <h1 class="text-xl font-extrabold dark:text-white">All quiz results:</h1>

      <ResultTable data={data} />
      <CreateTodos callback={(todos) => console.log(todos)} />
    </div>
  );
}
