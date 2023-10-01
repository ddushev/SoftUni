export default function Todo({
    todo
}) {
    return (
        <tr className={`todo ${todo.isCompleted ? 'is-completed' : ''}`}>
            <td>{todo.text}</td>
            <td>{todo.isCompleted ? 'Completed' : 'Not Completed'}</td>
            <td className="todo-action">
                <button className="btn todo-btn">Change status</button>
            </td>
        </tr>
    );
}