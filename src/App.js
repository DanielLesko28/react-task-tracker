import "./App.css"
import TaskColumn from "./components/taskColumn/TaskColumn";
import TaskForm from "./components/taskForm/TaskForm";
import { useState } from "react";

function App() {

  const [tasks, setTasks] = useState([])

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
