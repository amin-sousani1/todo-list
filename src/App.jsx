import './App.css'
import Form from './components/Form'
import ToDoList from './components/todolist'
import React,{useState} from 'react'
const App=()=>{

    const [inputText,setInputText]=useState('')
    const [todos,setTodos]=useState([])
    console.log(inputText);
    return(
        <div className=' App'>
            {/* <header>
              <h1 className='aa'>amin</h1>
            </header> */}
            <Form todos={todos} setTodos={setTodos} inputText={inputText} setInputText={setInputText}></Form>
            <ToDoList setTodos={setTodos}  todos={todos}></ToDoList>
        </div>
    )
}


export default App