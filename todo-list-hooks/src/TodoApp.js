import React from "react";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import { useState } from "react";
import ToDoList from "./ToDoList";
import ToDoForm from "./ToDoForm";

function TodoApp() {
    const initialTodos = [
        {id: 1, task: 'Read System Design', completed: false},
        {id: 2, task: 'Go to Indian Grocery Store', completed: true},
        {id: 3, task: 'Track Progress', completed: false}
    ];

    const [todos, setTodos] = useState(initialTodos);
    const addToDo = (newTask) => {
        setTodos([...todos, {id: 4, task: newTask, completed: false}]);
    }
    const removeToDo = (todoId) => {
        //filterOut ToDo
        const updatedTodo = todos.filter(todo => todo.id !== todoId);
        //call setTodo with new Todo
        setTodos(updatedTodo);
    }

    return (
        <Paper style={{
            padding: 0,
            margin: 0,
            height: "100vh",
            backgroundColor: "#f1f1f1"
        }}
        elevation={0}
        >
            <AppBar color='primary' position='static' style={{ height: "64px" }}>
                <Toolbar>
                    <Typography color='inherit'>ToDo With Hooks</Typography>
                </Toolbar>
            </AppBar>
            <Grid container justify='center' style={{ marginTop: "1rem" }}>
                <Grid item xs={11} md={8} lg={4}>
                    <ToDoForm addToDo={addToDo} />
                    <ToDoList todos={todos} removeToDo={removeToDo} />
                </Grid>
            </Grid>
        </Paper>
    )
}

export default TodoApp;

/**ToDoApp
 *  -ToDoForm
 *  - TODOList
 *      - ToDoListItem
 */

/**each todo has id, task, status(completed: true/false) */