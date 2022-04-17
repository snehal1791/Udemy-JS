import React, { useContext } from "react";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import useInputState from "./hooks/useInputState";
import { TodosContext } from "./contexts/todos.context"

function ToDoForm() {
    const [value, handleChange, reset] = useInputState("");
    const {addToDo} = useContext(TodosContext)
    return (
        <Paper style={{ margin: "1rem 0", padding: "0 1rem" }}>
            <form onSubmit={e => {
                e.preventDefault();
                addToDo(value);
                reset();
            }}>
                <TextField 
                    value={value} 
                    onChange={handleChange}
                    margin='normal'
                    label='Add New ToDo Item'
                    fullWidth />
            </form>
        </Paper>
    )
}

export default ToDoForm;