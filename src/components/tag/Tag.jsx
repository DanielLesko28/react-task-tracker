import React from "react";
import "./Tag.css";

const Tag = ({ selectedTag, tagName }) => {
  return (
    <div>
      <button className="tag" onClick={selectedTag}>
        {tagName}
      </button>
    </div>
  );
};

export default Tag;
