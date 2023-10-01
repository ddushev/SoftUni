import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Spinner from './components/Spinner';
import Todos from './components/Todos';

function App() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3030/jsonstore/todos')
            .then(resp => resp.json())
            .then(data => setTodos(Object.values(data)))
            .catch(err => console.log(err));
    }, []);

    function changeStatus(id) {
        setTodos(state => state.map(t => t._id == id ? {...t, isCompleted: !t.isCompleted} : t));
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
                        <button className="btn">+ Add new Todo</button>
                    </div>

                    <div className="table-wrapper">
                        {/* <!-- Loading spinner - show the load spinner when fetching the data from the server--> */}
                        {/* <Spinner /> */}

                        {/* <!-- Todo list table --> */}
                        <Todos todos={todos} changeStatus={changeStatus} />

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
