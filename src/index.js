import React from "react";
import ReactDOM from "react-dom";
import TodoList from "./components/TodoList/TodoList";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";

ReactDOM.render(
  <React.StrictMode>
    <TodoList />
  </React.StrictMode>,
  document.getElementById("root")
);
