import React, {useContext} from "react";
import useToggle from "./hooks/useToggle";
import EditToDoForm from "./EditToDoForm";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import { TodosContext } from "./contexts/todos.context";

function ToDo({ id, task, completed }) {
    const { dispatch } = useContext(TodosContext);
    const [isEditing, toggleIsEditing] = useToggle();
    return (
        <ListItem style={{ height: "64px"}}>
            {isEditing ? 
            <EditToDoForm id={id} task={task} toggleIsEditing={toggleIsEditing} />
            :
            <>
                <Checkbox tabIndex={-1} checked={completed} onClick={() => dispatch({ type: "TOGGLE", id: id })} />
                <ListItemText 
                    style={{ 
                        textDecoration: completed ? 'line-through' : 'none' 
                    }} 
                    >{task}</ListItemText>
                <ListItemSecondaryAction>
                    <IconButton 
                        aria-label='delete'
                        onClick={() => dispatch({ type: "REMOVE", id: id })} >
                        <DeleteIcon />
                    </IconButton>
                    <IconButton aria-label='edit' onClick={toggleIsEditing} >
                        <EditIcon />
                    </IconButton>
                </ListItemSecondaryAction>
            </>}
        </ListItem>
    )
}

export default ToDo;