import React from "react";
import "./Tag.css";

const Tag = ({ selectTag, tagName }) => {
  return (
    <div>
      <button type="button" className="tag" onClick={() => selectTag(tagName)}>
        {tagName}
      </button>
    </div>
  );
};

export default Tag;
