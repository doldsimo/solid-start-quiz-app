
import CreateTodos from "~/components/create-todos";
import { useRouteData } from "solid-start";
import ResultTable from "~/components/ResultTable/ResultTable";
import { createResource, createSignal } from "solid-js";


export function routeData() {
  const [data] = createResource(async () => {
    const response = await fetch("/api/quizes");
    return await response.json();
  });
  return { data };
}

export default function Home() {
  const { data } = useRouteData();
  const [tableContext, setTableContext] = createSignal("all");
  const [isRouteData, setIsRouteData] = createSignal(true);
  const [tableData, setTableData] = createSignal(data);


  const handleTableContext = async (e) => {
    setIsRouteData(false);
    setTableContext(e.target.value);
    let response;
    switch (e.target.value) {
      case "all":
        response = await fetch("/api/quizes/solid");
        break;
      case "solid":
        response = await fetch("/api/quizes/solid");
        break;
      case "programming":
        response = await fetch("/api/quizes/programming");
      default:
        break;
    }
    await response.json().then(data => { console.log(data); setTableData(data); data = data })
  }

  return (
    <div class="md:container md:mx-auto">
      <div>
        <h1 class="text-xl font-extrabold dark:text-white">Quiz results:</h1>
        <select className="select select-bordered w-full max-w-xs" onChange={(e) => handleTableContext(e)}>
          <option value="all" selected>All</option>
          <option value="solid">Solid</option>
          <option value="programming">Programming</option>
        </select>
      </div>

      <ResultTable data={isRouteData() ? data : tableData} />
      <CreateTodos callback={(todos) => console.log(todos)} />
    </div >
  );
}
