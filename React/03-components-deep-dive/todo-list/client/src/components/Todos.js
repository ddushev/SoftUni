import Todo from "./Todo";

const Todos = function ({
    todos,
    changeStatus
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
                {todos.map(todo => <Todo key={`${todo.text}${todo._id}`} todo={todo} changeStatus={changeStatus} />)}
            </tbody>
        </table>
    );
}

export default Todos;