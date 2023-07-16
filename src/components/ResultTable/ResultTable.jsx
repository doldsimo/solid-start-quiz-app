import { For } from "solid-js"

const ResultTable = (props) => {
    return (
        <div className="overflow-x-auto">
            {/* {console.log(props.data())} */}
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Date</th>
                        <th>Points</th>
                    </tr>
                </thead>
                <tbody>
                    {/* rows */}
                    <For each={props.data()}>{(result, i) =>
                        <tr>
                            <th>{i() + 1}</th>
                            <td>{result.name}</td>
                            <td>{result.type}</td>
                            <td>{result.date}</td>
                            <td>{result.points}</td>
                        </tr>
                    }</For>
                </tbody>
            </table>
        </div>
    )
}

export default ResultTable