import React, { useState } from "react";
import "./App.css";

function App() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [todo, setTodos] = useState([]);

  const AddTodo = () => {
    if (title.trim() !== "" && description.trim() !== "") {
      setTodos([...todo, { title, description }]);
      setTitle("");
      setDescription("");
    } else {
      alert("Fill All Details");
    }
  };

  const RemoveTodo = (id) => {
    setTodos(todo.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <h1>Add Todo</h1>
      <input
        type="text"
        placeholder="TITLE"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="DESCRIPTION"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <br></br>
      <button type="button" onClick={AddTodo}>
        ADD TODO
      </button>
      <div>
        {todo.map((todoItem, index) => (
          <div key={index}>
            <h2>Task: {todoItem.title}</h2>
            <p>Description: {todoItem.description}</p>
            <button onClick={() => RemoveTodo(index)}>Remove</button>
            <hr />
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
