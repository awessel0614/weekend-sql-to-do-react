import ToDoItem from '../ToDoItem/ToDoItem.jsx';
import './ToDoList.css';
import Grid from '@mui/material/Grid';

function ToDoList(props) {

    return(
        <>
        
        <h1 id="todolist">List:</h1>
        <Grid container spacing={2} id="list-items">
            {
                props.toDoList.map(item => <ToDoItem key={item.id} id={item.id} item={item} complete={item.complete} getToDoList={props.getToDoList}/>)
            }
        </Grid>
        </>
    )
}


export default ToDoList;