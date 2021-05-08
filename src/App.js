import React, {useState, useEffect} from 'react'
import './App.css';
import { projectFirestore,timeStamp } from './firebase';

const App = () => {
  
   const [todoItem, setTodoItem] = useState('');
   const [todoList, setTodoList] = useState([]);
   
   // receiving TodoList from firestore
   useEffect(() => {
        projectFirestore.collection('todoList').orderBy('timeStamp','desc').onSnapshot((snap) => {
          setTodoList(snap.docs.map( doc => doc.data().text))
        })
    },[todoItem])


   const formSubmit = (event) => {
        // preventing default action of form submit
        event.preventDefault();

        if(todoItem === ' '){
          alert('Please enter valid string')
        }else{
          
          // adding item to collection
          projectFirestore.collection('todoList').add({
            text : todoItem,
            timeStamp : timeStamp
          });
      }

      // Removing data from input form
      setTodoItem('');
   }

  return (
    <div className = 'App'>

      <h1>Todo App</h1>
      
      {/* Form to input Todo Item from user */}
      <div className = 'InputForm'>
        <form onSubmit = {formSubmit}>
          <input type = 'text' placeholder = 'Enter Item' value = {todoItem} onChange = { (event) => setTodoItem(event.target.value)} required/>
          <button type = 'submit'> Add </button> 
        </form>
      </div>

      
      {/* Display Todo List on screen */}
      <ul className = 'List'>
        {todoList.map((item,index) => {
          return <li key = {index}> {item} </li>
        })}
      </ul>

    </div>
  );
}

export default App;
