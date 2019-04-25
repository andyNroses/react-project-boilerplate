/* Modules */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Todo from './Todo';

/**
 * Todo
 */
const Todos = () => {
    // States
    const [todos, setTodos] = useState([]);
    // Api helper (should be outside component)
    const getTodos = async (url) => {
        const todos = await axios.get(url);
        setTodos(todos.data.splice(0, 5));
    }
    // Effects
    useEffect(() => {
        getTodos('https://jsonplaceholder.typicode.com/todos');
    }, []);
    // Conditional rendering
    const content = todos.length == 0 
        ? <div>No items</div>
        : todos.map(todo => <Todo key={todo.id} completed={todo.completed} title={todo.title} />);
    return(
        <React.Fragment>
            <h2>Todos</h2>
            { content }
        </React.Fragment>
    );
}

export default Todos;