import React, { useState } from 'react'

function TaskList({ text }) {
    const [input, setInput] = useState("")
    const [tasks, setTasks] = useState([])
    const [index, setIndex] = useState(0);
    

    function addTask() {
        if (input) {
            const newTask = { id: index, content: input, done: false };

            const temp = tasks.slice();
            temp.push(newTask);
            setTasks(temp);
            let ind = index + 1;
            setIndex(ind);
        }
        setInput("");
    }

    function deleteTask(id) {
        const updated = tasks.filter(
            task => task.id !== id
        );
        setTasks(updated);
    }

    function editTask(id) {
        const newContent = prompt("New task content: ");
        if (newContent) {
            setTasks(prev =>
                prev.map(task => 
                    task.id === id
                    ? { ...task, content: newContent}
                    : task
                )
            )
        }
    }

    function toggleTask(id) {
        setTasks(prev =>
                prev.map(task => 
                    task.id === id
                    ? { ...task, done: !task.done}
                    : task
                )
            )
    }

    

    function countRemainingTasks() {
        let remainingTaskCount = 0;
        for (let i = 0; i < tasks.length; i++) {
            if (!tasks[i].done) {
                remainingTaskCount++;
            }
        }
        return remainingTaskCount;
    }

    let tasksAvailable;

    if (tasks.length > 0) {
        tasksAvailable = <div className='flex flex-col justify-center items-center space-y-5'>
            {tasks.map(task => 
                <div key={task.id} className='gap-2 flex flex-row justify-center items-center'>
                    <input
                        type="checkbox"
                        checked={task.done}
                        onChange={() => toggleTask(task.id)}  
                     />
                     <label className={task.done ? "line-through" : ""}>
                        {task.content}
                     </label>
                    <button onClick={() => deleteTask(task.id)} className='hover:cursor-pointer rounded-lg bg-red-600 text-white px-5 py-2 hover:bg-red-400'>Delete</button>
                    <button onClick={() => editTask(task.id)} className='hover:cursor-pointer rounded-lg bg-green-600 text-white px-5 py-2 hover:bg-green-400'>Edit</button>

                </div>
            )}
            <h1>Remaning tasks: {countRemainingTasks()}</h1>
        </div>;
    } else {
        tasksAvailable = <div>No tasks yet.</div>;
    }

  return (
    <div className='flex flex-col justify-center items-center space-y-6'>
        <input value={input} onChange={(e) => setInput(e.target.value)} className='outline-1 outline-black' type="text" />
        <button onClick={addTask} className='bg-indigo-600 text-white px-7 py-3  rounded-lg hover:bg-indigo-400 hover:cursor-pointer'>Add Task</button>
        {tasksAvailable}
    </div>
    
  )
}

export default TaskList