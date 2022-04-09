import React from "react";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import { useState } from "react";
import ToDoList from "./ToDoList";

function TodoApp() {
    const initialTodos = [
        {id: 1, task: 'Read System Design', completed: false},
        {id: 2, task: 'Go to Indian Grocery Store', completed: true},
        {id: 3, task: 'Track Progress', completed: false}
    ];

    const [todos, setTodos] = useState(initialTodos);

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
            <ToDoList todos={todos} />
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