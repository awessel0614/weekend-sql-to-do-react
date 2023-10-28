import { useState } from 'react';
import axios from 'axios';

function ToDoForm(props) {
    const [toDo, setToDo] = useState('');

    const sendToDoToServer = (e) => {
        e.preventDefault();
        console.log('sendToDoToServer: ', toDo);

        axios.post('/todo', {
            task: toDo,
        }).then((response) => {
            console.log(response.data);
            setToDo('');
            props.getToDoList();
        }).catch((error) => {
            console.error(error);
            alert('Something went wrong!');
        })
    }


    return (
        <>
        <h2>Add a new chore to your list!</h2>
        <form onSubmit={sendToDoToServer}>
            Chore to add: <input value={toDo} onChange={(e) => setToDo(e.target.value)}/>
            <button>Submit</button>
        </form>
        </>
    )
}


export default ToDoForm;