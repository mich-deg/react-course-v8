// import React from "react";
import ReactDOM from "react-dom";

import Book from "./Book";

// const App = () => {
//   return React.createElement(
//     "div",
//     {},
//     React.createElement("h1", {}, "Adopt Me!"),
//     React.createElement(Book, {
//       title: "The Alchemist",
//       author: "Paul",
//       description: "A masterpiece of fiction.",
//     }),
//     React.createElement(Book, {
//       title: "Bloodline",
//       author: "Sidney Sheldon",
//       description:
//         "Roffe and Sons is a family firm, an international empire filled with desperate, cash-hungry family members.",
//     })
//   );
// };

const App = () => {
  <div>
    <h1>Favorite Book</h1>
    <Book
      title="The Alchemist"
      author="Paul"
      description="A masterpiece of fiction."
    />
    <Book
      title="Bloodline"
      author="Sidney Sheldon"
      description="Roffe and Sons is a family firm, an international empire filled with desperate, cash-hungry family members."
    />
  </div>;
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
// root.render(React.createElement(App));
root.render(<App />);
