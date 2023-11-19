import React from "react";
import "./Tag.css";

const Tag = ({ selectTag, tagName, selected }) => {
  const tagStyle = {
    HTML: { backgroundColor: "#fda821" },
    CSS: { backgroundColor: "#15d4c8" },
    Javascript: { backgroundColor: "#ffd12c" },
    React: { backgroundColor: "#4cdafc" },
    default: { backgroundColor: "#f9f9f9" },
  };

  return (
    <div>
      <button
        type="button"
        className="tag"
        onClick={() => selectTag(tagName)}
        style={selected ? tagStyle[tagName] : tagStyle.default}
      >
        {tagName}
      </button>
    </div>
  );
};

export default Tag;
