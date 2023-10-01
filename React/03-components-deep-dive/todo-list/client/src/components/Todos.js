import Todo from "./Todo";

const Todos = function ({
    todos
}) {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th className="table-header-task">Task</th>
                    <th className="table-header-status">Status</th>
                    <th className="table-header-action">Action</th>
                </tr>
            </thead>
            <tbody>
                {/* <!-- Todo item --> */}
                {todos.map(todo => <Todo key={todo._id} todo={todo} />)}
            </tbody>
        </table>
    );
}

export default Todos;