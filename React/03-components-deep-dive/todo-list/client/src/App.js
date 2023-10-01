import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Spinner from './components/Spinner';
import Todos from './components/Todos';

function App() {
    const [todos, setTodos] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:3030/jsonstore/todos')
            .then(resp => resp.json())
            .then(data => {
                setTodos(Object.values(data));
                setLoading(false);
            })
            .catch(err => console.log(err));
    }, []);

    function changeStatus(id) {
        setTodos(state => state.map(t => t._id === id ? {...t, isCompleted: !t.isCompleted} : t));
    }

    function onAddTask() {
        const id = todos[todos.length - 1]._id + 1;
        const newTask = {
            id,
            isCompleted: false,
            text: prompt('New task text:')
        }
        setTodos(oldState => [newTask, ...oldState ])
    }
    return (
        <div>
            {/* <!--Navigation header --> */}
            <Header />

            {/* <!--Main content-- > */}
            <main className="main">

                {/* <!-- Section container --> */}
                <section className="todo-list-container">
                    <h1>Todo List</h1>

                    <div className="add-btn-container">
                        <button onClick={() => onAddTask()} className="btn">+ Add new Todo</button>
                    </div>

                    <div className="table-wrapper">
                        {isLoading ? <Spinner /> : <Todos todos={todos} changeStatus={changeStatus}  />}
  

                    </div>
                </section>
            </main>

            {/* <!--Footer --> */}
            <footer className="footer">
                <p>Copyright © designed by Mihail Valkov</p>
            </footer>
        </div>
    );
}

export default App;
