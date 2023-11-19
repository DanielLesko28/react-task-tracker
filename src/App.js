import "./App.css"
import TaskColumn from "./components/taskColumn/TaskColumn";
import TaskForm from "./components/taskForm/TaskForm";
import { useEffect, useState } from "react";

const oldTasks = localStorage.getItem("tasks")

function App() {

  const [tasks, setTasks] = useState(JSON.parse(oldTasks) || [])

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  },[tasks])

  const handleDelete = (taskIndex) => {
    const newTasks = tasks.filter((task, index) => index !== taskIndex)
    setTasks(newTasks)
  }

  return (
   <div className="app">
    <header className="app_header">

    <TaskForm setTasks={setTasks} />
    </header>
    <main className="app_main">
     <TaskColumn title="To do" tasks={tasks} status='todo' handleDelete={handleDelete} />
     <TaskColumn title="Doing" tasks={tasks} status='doing' handleDelete={handleDelete} />
     <TaskColumn title="Done" tasks={tasks} status='done' handleDelete={handleDelete} />
    </main>
   </div>
  );
}

export default App;
