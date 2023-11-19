import React from "react";
import "./TaskColumn.css";
import TaskCard from "../taskCard/TaskCard";

const TaskColumn = ({ title, tasks, status, handleDelete }) => {
  return (
    <section className="task_section">
      <h1>{title}</h1>
      {tasks.map(
        (task, index) =>
          task.status === status && (
            <TaskCard
              key={index}
              title={task.task}
              tags={task.tags}
              handleDelete={handleDelete}
              index={index}
            />
          )
      )}
    </section>
  );
};

export default TaskColumn;
