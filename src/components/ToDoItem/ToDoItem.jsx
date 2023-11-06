// import axios from 'axios';
// import './ToDoItem.css';
// import Button from '@mui/material/Button';
// import Grid from '@mui/material/Grid';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import Typography from '@mui/material/Typography';


// function ToDoItem(props) {

//     console.log(props);
//     console.log(props.id);


//     const editToDo = () => {
//         axios.put(`/todo/${props.id}`).then((response) => {
//             props.getToDoList();
//         }).catch((error) => {
//             console.error(error);
//             alert('Something went wrong!');
//         });
//     };

//     const toggleComplete = () => {
//         axios.put(`/todo/${props.id}`).then((reponse) => {
//             props.getToDoList();
//         }).catch((error) => {
//             console.error(error);
//             alert('Something went wrong!');
//         });
//     };

//     const deleteItem = () => {

//         axios.delete(`/todo/${props.id}`)
//             .then(response => {
//                 props.getToDoList();
//             })
//             .catch(error => {
//                 console.error(error);
//                 alert('Something went wrong!');
//             });
//     };

//     return (
//         <>
//         <Grid item xs={12} md={12} lg={12}>
//             <Card >
//                 <CardContent className={props.complete ? 'highlight' : 'normal'}>
//                     <Typography variant="h3">
//                         {props.item.task}
//                     </Typography>
//                 </CardContent>


//                 <CardActions sx={{float: 'right'}}>
//                     <Button variant="outlined" id="edit-button" onClick={editToDo}>Edit</Button>
//                     <Button variant="outlined" id="complete-button" onClick={toggleComplete}>{props.complete ? 'Completed!' : 'Click to Complete!'}</Button>
//                     <Button variant="outlined" id="delete-button" onClick={deleteItem}>Delete</Button>
                    
//                 </CardActions>
//             </Card>
//         </Grid>
//         </>
        
        
        
        
//         //I DON'T THINK I NEED THIS SECTION AT ALL but i'm saving it for now just in case 
//         // <>
//         // <li className={props.complete ? 'highlight' : 'normal'}>{props.item.task}
//         // <Button variant="outlined" id="delete-button" onClick={deleteItem}>Delete</Button>
//         // <Button variant="outlined" id="complete-button" onClick={toggleComplete}>{props.complete ? 'Completed!' : 'Click to Complete!'}</Button>
//         // {/* <button id="complete-button" onClick={toggleComplete}>{props.complete ? 'Completed!' : 'Click to Complete!'}</button> */}
//         // </li>
//         // </>
//     )

// }

// export default ToDoItem;
























import axios from 'axios';
import './ToDoItem.css';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import swal from "sweetalert";


function ToDoItem(props) {

    console.log(props);
    console.log(props.id);


    const editToDo = () => {
        axios.put(`/todo/${props.id}`).then((response) => {
            props.getToDoList();
        }).catch((error) => {
            console.error(error);
            alert('Something went wrong!');
        });
    };

    const toggleComplete = () => {
        axios.put(`/todo/${props.id}`).then((reponse) => {
            props.getToDoList();
        }).catch((error) => {
            console.error(error);
            alert('Something went wrong!');
        });
    };

    const deleteItem = () => {

        swal({
            title: "Are you sure?",
            text: "Are you sure you want to delete this task?",
            icon: "warning", 
            buttons: true,
            dangerMode: true
        }).then(willDelete => {

            if (willDelete) {

            axios.delete(`/todo/${props.id}`)
                .then(response => {
                    props.getToDoList();

                    swal("Your task has been deleted!", {
                        icon:"success",
                    });
                })
                .catch(error => {
                    console.error(error);
                    alert('Something went wrong!');
                });
            
    } else {
        swal('No tasks have been deleted.');
    }
     
});
};

    
    return (
        <>
        <Grid item xs={12} md={12} lg={12}>
            <Card >
                <CardContent className={props.complete ? 'highlight' : 'normal'}>
                    <Typography variant="h3">
                        {props.item.task}
                    </Typography>
                </CardContent>


                <CardActions sx={{float: 'right'}}>
                    <Button variant="outlined" id="edit-button" onClick={editToDo}>Edit</Button>
                    <Button variant="outlined" id="complete-button" onClick={toggleComplete}>{props.complete ? 'Completed!' : 'Click to Complete!'}</Button>
                    <Button variant="outlined" id="delete-button" onClick={deleteItem}>Delete</Button>
                    
                </CardActions>
            </Card>
        </Grid>
        </>
        
        
        
        
        //I DON'T THINK I NEED THIS SECTION AT ALL but i'm saving it for now just in case 
        // <>
        // <li className={props.complete ? 'highlight' : 'normal'}>{props.item.task}
        // <Button variant="outlined" id="delete-button" onClick={deleteItem}>Delete</Button>
        // <Button variant="outlined" id="complete-button" onClick={toggleComplete}>{props.complete ? 'Completed!' : 'Click to Complete!'}</Button>
        // {/* <button id="complete-button" onClick={toggleComplete}>{props.complete ? 'Completed!' : 'Click to Complete!'}</button> */}
        // </li>
        // </>
    )

}

export default ToDoItem;