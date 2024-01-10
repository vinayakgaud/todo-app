import { useState } from "react";

export function CreateTodo() {
  //local state to get input values
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div>
      <input
        type="text"
        name="title"
        placeholder="Enter title here"
        onChange={(e) => {
          const value = e.target.value;
          setTitle(value);
        }}
      ></input>
      <br />
      <textarea
        name="description"
        placeholder="Enter description here"
        onChange={(e) => {
          const value = e.target.value;
          setDescription(value);
        }}
      ></textarea>
      <br />
      <button
        onClick={() => {
          fetch("http://localhost:3000/createTodo", {
            method: "POST",
            body: JSON.stringify({
              title: title,
              description: description,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          }).then((res) => {
            alert("Todo is added");
          });
        }}
      >
        Add Todo
      </button>
    </div>
  );
}
