// import React from "react";

// const Book = (props) => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, props.title),
//     React.createElement("h2", null, props.author),
//     React.createElement("h2", null, props.description),
//   ]);
// };

const Book = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.author}</h2>
      <h2>{props.description}</h2>
    </div>
  );
};

export default Book;
