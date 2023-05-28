// import React from "react";

// const Book = (props) => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, props.title),
//     React.createElement("h2", null, props.author),
//     React.createElement("h2", null, props.description),
//   ]);
// };

const Pet = (props) => {
  return (
    <div>
      <h1>{props.namr}</h1>
      <h2>{props.animal}</h2>
      <h2>{props.breed}</h2>
    </div>
  );
};

export default Pet;
