import "./App.css"
import TaskForm from "./components/taskForm/TaskForm";

function App() {
  return (
   <div className="app">
    <header className="app_header">header</header>
    <TaskForm />
    <main className="app_main">
      <section className="task_section">section 1</section>
      <section className="task_section">section 2</section>
      <section className="task_section">section 3</section>
    </main>
   </div>
  );
}

export default App;
