import { useState } from 'react';
import axios from 'axios';
import './ToDoForm.css';

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
            <input id="input-field" value={toDo} placeholder="e.g. make bed" onChange={(e) => setToDo(e.target.value)}/>
            <button id="submit-button">submit</button>
        </form>
        </>
    )
}


export default ToDoForm;































// import { useState } from 'react';
// import axios from 'axios';
// import './ToDoForm.css';

// function ToDoForm(props) {
//     const [toDo, setToDo] = useState('');
//     const [date, setDate] = useState('');

//     const sendToDoToServer = (e) => {
//         e.preventDefault();
//         console.log('sendToDoToServer: ', toDo, date);

//         axios.post('/todo', {
//             task: toDo,
//             date: date
//         }).then((response) => {
//             console.log(response.data);
//             setToDo('');
//             setDate('');
//             props.getToDoList();
//         }).catch((error) => {
//             console.error(error);
//             alert('Something went wrong!');
//         })
//     }


//     return (
//         <>
//         <h2>Add a new chore to your list!</h2>
//         <form onSubmit={sendToDoToServer}>
//             <h3>Task: <input id="input-field" value={toDo} placeholder="e.g. make bed" onChange={(e) => setToDo(e.target.value)}/></h3>
//             <h3>Due by: <input type="date" id="date-input-field" value={date} onChange={(e) => setDate(e.target.value)}/></h3>
//             <br></br>
//             <button id="submit-button">submit</button>
//         </form>
//         </>
//     )
// }


// export default ToDoForm;