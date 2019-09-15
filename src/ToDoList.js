import React, { useState } from 'react';
import ToDoTable from './ToDoTable'

const ToDoList = () => {
    const [desc, setDesc] = useState({ dates: '', description: '' });
    const [todos, setTodos] = useState([]);

    const inputChanged = (event) => {
        setDesc({
            ...desc,
            [event.target.name]: event.target.value
        });
    }

    const addTodo = (event) => {
        event.preventDefault();
        setTodos([...todos, desc]);
        setDesc({ dates: "", description: "" });
    }

    const deleteButton = (event) => {
        event.preventDefault();
        setTodos(todos.filter((todo, index) => parseInt(event.target.id) !== index));
    }

    return (
        <div>
            <h1>Simple ToDoList</h1>
            <form onSubmit={addTodo}>
                <fieldset>
                    <legend>Add Todo:</legend>
                    <label>Date: </label>
                    <input type="date" name="dates" value={desc.dates} onChange={inputChanged} />
                    <label>Description: </label>
                    <input type="text" name="description" value={desc.description} onChange={inputChanged} />
                    <input type="submit" value="Add" />
                </fieldset>
            </form>
            <ToDoTable todos={todos} deleteButton={deleteButton}/>
        </div>
    );
};

export default ToDoList;