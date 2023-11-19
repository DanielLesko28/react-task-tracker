import "./App.css"
import TaskColumn from "./components/taskColumn/TaskColumn";
import TaskForm from "./components/taskForm/TaskForm";
import { useState } from "react";

function App() {

  const [tasks, setTasks] = useState([])

  console.log("tasks", tasks)

  return (
   <div className="app">
    <header className="app_header">

    <TaskForm setTasks={setTasks} />
    </header>
    <main className="app_main">
     <TaskColumn title="To do" tasks={tasks} status='todo' />
     <TaskColumn title="Doing" tasks={tasks} status='doing' />
     <TaskColumn title="Done" tasks={tasks} status='done' />
    </main>
   </div>
  );
}

export default App;
