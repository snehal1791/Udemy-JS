import React from "react";
import TextField from "@material-ui/core/TextField";
import useInputState from "./hooks/useInputState";

function EditToDoForm({ id, task, editToDo, toggleIsEditing }) {
    const [value, handleChange, reset] = useInputState(task)
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