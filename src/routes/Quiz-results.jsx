
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
        response = await fetch("/api/quizes");
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

  const handleFilterTableContex = async (e) => {
    setIsRouteData(false);
    let filterWord = tableContext() + "-" + e.target.value;
    console.log(filterWord);
    let response;
    switch (filterWord) {
      // Same as without filter for date
      case "all-date":
        response = await fetch("/api/quizes");
        break;
      case "solid-date":
        response = await fetch("/api/quizes/solid");
        break;
      case "programming-date":
        response = await fetch("/api/quizes/programming");
        break;
      // Filter with points 
      case "all-points":
        response = await fetch("/api/quizes/points");
        break;
      case "solid-points":
        response = await fetch("/api/quizes/solid/points");
        break;
      case "programming-points":
        response = await fetch("/api/quizes/programming/points");
        break;
      // Filter with name 
      case "all-name":
        response = await fetch("/api/quizes/name");
        break;
      case "solid-name":
        response = await fetch("/api/quizes/solid/name");
        break;
      case "programming-name":
        response = await fetch("/api/quizes/programming/name");
        break;
      default:
        break;
    }
    await response.json().then(data => { console.log(data); setTableData(data); data = data })
  }

  return (
    <div class="md:container md:mx-auto" >
      <div style={{ display: "flex", "flex-direction": "row", "justify-content": "space-between" }}>
        <div>
          <h1 class="text-xl font-extrabold dark:text-white">Quiz results:</h1>
          <select className="select select-bordered w-full max-w-xs" onChange={(e) => handleTableContext(e)}>
            <option value="all" selected>All</option>
            <option value="solid">Solid</option>
            <option value="programming">Programming</option>
          </select>
        </div>
        <div>
          <p class="dark:text-white">Orderd by:</p>
          <select className="select select-bordered w-full max-w-xs" onChange={(e) => handleFilterTableContex(e)}>
            <option value="date" selected>Date</option>
            <option value="points">Points</option>
            <option value="name">Name</option>
          </select>
        </div>
      </div>

      <ResultTable data={isRouteData() ? data : tableData} />
      {/* <CreateTodos callback={(todos) => console.log(todos)} /> */}
    </div >
  );
}
