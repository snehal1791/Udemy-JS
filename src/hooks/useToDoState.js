import { v4 as uuidv4 } from 'uuid';
import useLocalStorageState from "./useLocalStorageState";

function useToDoState(initialToDos) {

    const [todos, setTodos] = useLocalStorageState("todos",initialToDos);
    
    return {
        todos,
        addToDo: (newTask) => {
            setTodos([...todos, {id: uuidv4(), task: newTask, completed: false}]);
        },
        removeToDo: (todoId) => {
            const updatedTodos = todos.filter(todo => todo.id !== todoId);
            setTodos(updatedTodos);
        },
        toggleCompletion: (todoId) => {
            const updatedTodos = todos.map(todo => 
                todo.id === todoId ? {...todo, completed: !todo.completed} : todo
            );
            setTodos(updatedTodos);
        },
        editToDo: (todoId, newTask) => {
            const updatedTodos = todos.map(todo => 
                todo.id === todoId ?
                {...todo, task: newTask} :
                todo
            );
            setTodos(updatedTodos);
        }
    }
}

export default useToDoState;