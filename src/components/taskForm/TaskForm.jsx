import React, { useState } from "react";
import "./TaskForm.css";
import Tag from "../tag/Tag";

const TaskForm = ({ setTasks }) => {
  const [taskData, setTaskData] = useState({
    task: "",
    status: "todo",
    tags: [],
  });

  const checkTag = (tag) => {
    return taskData.tags.some((item) => item === tag);
  };

  const selectTag = (tag) => {
    if (taskData.tags.some((item) => item === tag)) {
      const filteredTags = taskData.tags.filter((item) => item !== tag);
      setTaskData((prev) => {
        return { ...prev, tags: filteredTags };
      });
    } else {
      setTaskData((prev) => {
        return { ...prev, tags: [...prev.tags, tag] };
      });
    }
  };

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
    // console.log(taskData);
    setTasks((prev) => {
      return [...prev, taskData];
    });

    setTaskData({
      task: "",
      status: "todo",
      tags: [],
    });
  };

  return (
    <header className="task_header">
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          name="task"
          value={taskData.task}
          className="task_input"
          placeholder="Enter your Task"
          onChange={handleChange}
        />
        <div className="task_form_bottom_line">
          <Tag
            tagName={"HTML"}
            selectTag={selectTag}
            selected={checkTag("HTML")}
          />
          <Tag
            tagName={"CSS"}
            selectTag={selectTag}
            selected={checkTag("CSS")}
          />
          <Tag
            tagName={"Javascript"}
            selectTag={selectTag}
            selected={checkTag("Javascript")}
          />
          <Tag
            tagName={"React"}
            selectTag={selectTag}
            selected={checkTag("React")}
          />
          <div>
            <select
              name="status"
              className="task_status"
              onChange={handleChange}
              value={taskData.status}
            >
              <option value="todo">To do</option>
              <option value="doing">Doing</option>
              <option value="done">Done</option>
            </select>
            <button
              type="submit"
              className="task_submit"
              disabled={taskData.task === ""}
              style={{
                backgroundColor: taskData.task === "" && "lightgray",
                // Add other styles as needed
              }}
            >
              + Add
            </button>
          </div>
        </div>
      </form>
    </header>
  );
};

export default TaskForm;
