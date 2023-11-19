import "./App.css"
import TaskCard from "./components/taskCard/TaskCard";
import TaskForm from "./components/taskForm/TaskForm";

function App() {
  return (
   <div className="app">
    <header className="app_header">

    <TaskForm />
    </header>
    <main className="app_main">
      <section className="task_section">
      <h1>
        Todo
      </h1>
      <TaskCard />
      </section>
      <section className="task_section">  <h1>
        Doing
      </h1>
      <TaskCard /></section>
      <section className="task_section">
      <h1>
        Done
      </h1>
      <TaskCard />
      </section>
    </main>
   </div>
  );
}

export default App;
