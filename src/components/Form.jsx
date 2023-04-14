import React from 'react'
import '../App.css'


const Form=({setInputText,todos,inputText,setTodos})=>{
    const inputTexthandler=(e)=>{
        
        setInputText(e.target.value)
    };

    const submitTodohandler=(e)=>{
        e.preventDefault();
        setTodos([
            ...todos,
            {text:inputText, completed:false,id:Date.now()}
        ]);
        setInputText('')
    }
    return(
        <form>
            <input placeholder='Write here' value={inputText} onChange={inputTexthandler} type="text"  className='todo-input'/>
            <button onClick={submitTodohandler} className=' todo-button' type='submit'>add</button>
            
        </form>
    )
}

export default Form