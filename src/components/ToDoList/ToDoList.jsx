import ToDoItem from '../ToDoItem/ToDoItem.jsx';
import './ToDoList.css';

function ToDoList(props) {

    return(
        <>
        <h1 id="todolist">List:</h1>
        <ul id="list-items">
            {
                props.toDoList.map(item => <ToDoItem id={item.id} item={item} complete={item.complete} getToDoList={props.getToDoList}/>)
            }
        </ul>
        </>
    )
}


export default ToDoList;