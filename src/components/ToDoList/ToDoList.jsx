import ToDoItem from '../ToDoItem/ToDoItem.jsx';

function ToDoList(props) {

    return(
        <>
        <h1>To Do List:</h1>
        <ul>
            {
                props.toDoList.map(item => <ToDoItem id={item.id} item={item} complete={item.complete} getToDoList={props.getToDoList}/>)
            }
        </ul>
        </>
    )
}


export default ToDoList;