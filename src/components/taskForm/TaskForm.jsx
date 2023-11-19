import React, { useState, useEffect } from "react";
import "./TaskForm.css";
import Tag from "../tag/Tag";

const TaskForm = () => {
  const [taskData, setTaskData] = useState({
    task: "",
    status: "todo",
    tags: [],
  });

  const selectTag = () => {};

  const handleChange = (e) => {
    //We can rewrite these line with destructuring
    // const name = e.target.name;
    // const value = e.target.value;

    const { name, value } = e.target;

    setTaskData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(taskData);
    setTaskData({
      task: "",
      status: "todo",
    });
  };

  useEffect(() => {}, [taskData]);

  return (
    <header className="task_header">
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          name="task"
          className="task_input"
          placeholder="Enter your Task"
          onChange={handleChange}
        />
        <div className="task_form_bottom_line">
          <Tag tagName={"HTML"} selectTag={selectTag} />
          <Tag tagName={"CSS"} selectTag={selectTag} />
          <Tag tagName={"Javascript"} selectTag={selectTag} />
          <Tag tagName={"React"} selectTag={selectTag} />
          <div>
            <select
              name="status"
              className="task_status"
              onChange={handleChange}
            >
              <option value="todo">To do</option>
              <option value="doing">Doing</option>
              <option value="done">Done</option>
            </select>
            <button type="submit" className="task_submit">
              + Add
            </button>
          </div>
        </div>
        <section
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "1rem 0 1rem 0",
          }}
        >
          <div>
            {tag === "HTML" ? (
              <p style={{ color: "purple" }}>{tag}</p>
            ) : (
              <p>{tag}</p>
            )}
          </div>
          <button style={{ margin: "0 0 0 1rem" }} onClick={() => setTag("")}>
            Clear state
          </button>
        </section>
      </form>
    </header>
  );
};

export default TaskForm;
