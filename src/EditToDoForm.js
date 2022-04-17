import React, { useContext } from "react";
import TextField from "@material-ui/core/TextField";
import useInputState from "./hooks/useInputState";
import { TodosContext } from "./contexts/todos.context"

function EditToDoForm({ id, task, toggleIsEditing }) {
    const [value, handleChange, reset] = useInputState(task);
    const { editToDo } = useContext(TodosContext);
    return (
        <form onSubmit={ e => {
                e.preventDefault();
                editToDo(id, value);
                reset();
                toggleIsEditing();
            }
        }
        style={{ margin: '1rem',width: '50%' }}
        >
            <TextField 
                margin='normal'
                value={value}
                onChange={handleChange}
                fullWidth
                autoFocus
            />
        </form>
    )
}

export default EditToDoForm;