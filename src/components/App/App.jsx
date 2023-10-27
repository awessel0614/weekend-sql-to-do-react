import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import ToDoItem from '../ToDoItem/ToDoItem.jsx';
import ToDoForm from '../ToDoForm/ToDoForm.jsx';

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
    <div>
      <h1>TO DO APP</h1>
      <ToDoForm getToDoList={getToDoList}/>
      <main>
        {
          toDoList.map(item => <ToDoItem key={item.id} item={item} />)
        }
      </main>
    </div>
  );

}

export default App;
