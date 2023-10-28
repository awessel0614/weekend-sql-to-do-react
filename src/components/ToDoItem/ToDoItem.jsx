import axios from 'axios';
import './ToDoItem.css';

function ToDoItem(props) {

    console.log(props);
    console.log(props.id);

    const toggleComplete = () => {
        axios.put(`/todo/${props.id}`).then((reponse) => {
            props.getToDoList();
        }).catch((error) => {
            console.error(error);
            alert('Something went wrong!');
        });
    };

    const deleteItem = () => {

        axios.delete(`/todo/${props.id}`)
            .then(response => {
                props.getToDoList();
            })
            .catch(error => {
                console.error(error);
                alert('Something went wrong!');
            });
    };

    return (
        <>
        <li className={props.complete ? 'highlight' : 'normal'}>{props.item.task}</li>
        <button onClick={toggleComplete}>{props.complete ? 'Completed!' : 'Click to Complete!'}</button>
        <button id="delete-button" onClick={deleteItem}>Delete</button>
        </>
    )

}

export default ToDoItem;