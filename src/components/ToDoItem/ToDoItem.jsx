import axios from 'axios';

function ToDoItem(props) {

    console.log(props);
    console.log(props.item.id);

    const toggleComplete = () => {
        axios.put(`/todo/${props.item.id}`).then((reponse) => {
            props.getToDoList();
        }).catch((error) => {
            console.error(error);
            alert('Something went wrong!');
        });
    };

    const deleteItem = () => {

        axios.delete(`/todo/${props.item.id}`)
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
        <li>{props.item.task}</li>
        <button onClick={toggleComplete}>{props.complete ? 'Completed!' : 'Click to Complete!'}</button>
        <button id="delete-button" onClick={deleteItem}>Delete</button>
        </>
    )

}

export default ToDoItem;