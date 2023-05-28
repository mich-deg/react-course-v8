// import React from "react";
// import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";

// import Book from "./Book";
import SearchParams from "./SearchParams";

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
  return (
    <div>
      <h1>Adopt Me!</h1>
      <SearchParams />
    </div>
  );
};

const container = document.getElementById("root");
// const root = ReactDOM.createRoot(container);
// root.render(React.createElement(App));
const root = createRoot(container);
root.render(<App />);
