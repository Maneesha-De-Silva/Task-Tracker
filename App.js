import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState } from 'react'
import AddTask from './components/AddTask';
import React from 'react'
import Task from './components/Task';

const  App = () => {
  const [tasks,settasks] = useState([
    {
        id:1,
        text: 'Doctors Appointment',
        day: 'Feb 5th at 2:30pm',
        reminder: true,
    },
    {
        id:2,
        text: 'Meeting at school',
        day: 'Feb 6th at 1:30pm',
        reminder: true,
    },
    {
        id:3,
        text: 'Food ShoppingDoctors Appointment',
        day: 'Feb 5th at 2:30pm',
        reminder: false,
    }
]
)

// Add Task 
const addTask =(task) => {
  console.log(task)
}


// delete task 
const deleteTask = (id) => {
  settasks(tasks.filter((task) => task.id !== id))
 }

 const toggleReminder = (id) => {
   settasks(
     tasks.map((task)=> 
     task.id === id ? 
   {...task, reminder: !task.reminder} 
   : task
   )
   )
 }
   return (
     <div className = 'container'>
     <Header/>
     <AddTask onAdd ={ addTask} />
    {tasks.length > 0 ? (
    <Tasks tasks={tasks}  
    onDelete= {deleteTask} onToggle={toggleReminder}/>)
    :('No Tasks To Show')}
     </div>
   )
 }
  export default App
 

