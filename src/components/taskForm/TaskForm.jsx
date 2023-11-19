import React, { useState, useEffect } from "react";
import "./TaskForm.css";
import Tag from "../tag/Tag";

const TaskForm = () => {
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
    console.log(taskData);
    setTaskData({
      task: "",
      status: "todo",
      tags: taskData.tags,
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
            <button type="submit" className="task_submit">
              + Add
            </button>
          </div>
        </div>
        {/* <section
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "1rem 0 1rem 0",
          }}
        >
          <div>{taskData}</div>
          {/* <button
            style={{ margin: "0 0 0 1rem" }}
            onClick={(prev) => setTaskData({ ...prev, tags: [] })}
          >
            Clear state
          </button> */}
        {/* </section> */}
      </form>
    </header>
  );
};

export default TaskForm;
