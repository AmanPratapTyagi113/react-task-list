import React, {useState} from 'react';
import {GiHornedHelm} from 'react-icons/gi';
import {AiOutlinePlus, AiOutlineClose} from 'react-icons/ai';

function App(){
   const[tasks, setTasks] = useState([]);
   const[input, setInput] = useState('')

   const handleSubmit = (event)=>{
      event.preventDefault()
      const addTask = {
         id: Math.floor(Math.random()*1000),
         text: input,
         completed: false
      }
      setTasks([...tasks, addTask])
      setInput('')
   }

// Delete
const deleteTask = (id)=>{
   let filteredTask = [...tasks].filter((tasks) => tasks.id !== id)
   setTasks(filteredTask)
   console.log('task deleted')
}

//toggle completed task
const toggleComplete = (id) => {
   setTasks(
      tasks.map(task => (
         task.id === id? {...task, completed: !task.completed} : task
      ))
   )
}

const date = new Date()
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "Octobar", "November", "December"]

  return(
    <div className= 'app'>
      <div className='container'>
        <h1><GiHornedHelm/>MindTrack</h1>
        <div className='date'>
            <p>{days[date.getDay()]},</p>
            <p>{date.getDate()}</p>
            <p>{months[date.getMonth()]}</p>
            <p>{date.getFullYear()}</p>
        </div>

        <form onSubmit={handleSubmit}>
            <div className='form-input'>
               <AiOutlinePlus className='icons'/>
               <input 
                  value={input}
                  onChange={event => setInput(event.target.value)}
                  placeholder='Enter a Task' 
                  type="text"/>
            </div>
            
        </form>
        <div>
            {tasks.map(task=>(
               <div className={`task-row ${task.completed ? 'completed' : ''}`} key={task.id} onDoubleClick={() => toggleComplete(task.id)} >
                  <p>{task.text}</p>
                  <AiOutlineClose onClick={() => deleteTask(task.id)} className="icon"/>
               </div>
            ))}
        </div>
         <p>{(tasks < 1) ? 'You have no tasks': `Tasks: ${tasks.length}`}</p>
      </div>
    </div>
  );
}
export default App;
