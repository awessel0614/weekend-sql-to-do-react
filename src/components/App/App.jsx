import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
//import ToDoItem from '../ToDoItem/ToDoItem.jsx';
import ToDoForm from '../ToDoForm/ToDoForm.jsx';
import ToDoList from '../ToDoList/ToDoList.jsx';
import Container from '@mui/material/Container';


function App () {
  
  const [toDoList, setToDoList] = useState([]);

  const getToDoList = () => {

    axios.get('/todo').then((response) => {
      console.log(response.data);
      setToDoList(response.data);
    }).catch((error) => {
      console.log('Error in getToDoList: ', error);
      alert('Something went wrong!');
    });
  };

useEffect(() => {
  getToDoList();
}, []);




  return (
    <Container maxWidth='lg'>
      <h1>To Do App</h1>
      <ToDoForm getToDoList={getToDoList}/>
      <main>
       <ToDoList getToDoList={getToDoList} toDoList={toDoList}/>
      </main>
    </Container>
  );

}

export default App;
