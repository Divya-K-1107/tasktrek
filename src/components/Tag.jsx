import React from "react";

import "./Tag.css";

// const Tag = (props) => {
//   return (
//     <button type="button" className="tag">
//       {props.tagName}
//     </button>
//   );
// };

const Tag = ({ tagName, selectTag, selected }) => {
  const tagStyle = {
    HTML: { backgroundColor: "#fda821" },
    CSS: { backgroundColor: "#15d4c8" },
    Javascript: { backgroundColor: "#ffd12c" },
    React: { backgroundColor: "#4cdafc" },
    default: { backgroundColor: "#f9f9f9" },
  };
  return (
    <button
      type="button"
      className="tag"
      style={selected ? tagStyle[tagName] : tagStyle.default}
      onClick={() => selectTag(tagName)}
    >
      {tagName}
    </button>
  );
};
///we pass typ='button' because in all browsers except Internet Explorer default type of button is submit which we don't want
//use arrow function to call selectTag function and pass tag name
export default Tag;
