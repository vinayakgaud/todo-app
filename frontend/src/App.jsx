import { useState } from "react";
import "./App.css";
import { CreateTodo } from "./components/CreateTodo";
import { GetTodo } from "./components/GetTodo";

function App() {
  // const [todos, setTodos] = useState([]);
  // fetch("http://localhost:3000/getTodos")
  //   .then(async (res) => {
  //     const todoJson = await res.json();
  //     setTodos(todoJson.todos);
  //   })
  //   .catch((err) => console.log("Error in fetching todos", err)); //we will get cors error , as it is not allowed to silent request from localhost frontend to backend as it is not on same port
  return (
    <div className="">
      <CreateTodo />
      {/* <GetTodo todos={todos} /> */}
    </div>
  );
}

export default App;
