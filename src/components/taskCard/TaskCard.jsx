import React from "react";
import "./TaskCard.css";
import Tag from "../tag/Tag";

const TaskCard = ({ title, tags }) => {
  return (
    <article className="task_card">
      <p className="task_text">{title}</p>
      <div className="task_card_bottom_line">
        <div className="task_card_tags">
          {tags.map((tag, index) => (
            <Tag key={index} tagName={tag} selected={true} />
          ))}
        </div>
        <button>Delete</button>
      </div>
    </article>
  );
};

export default TaskCard;
