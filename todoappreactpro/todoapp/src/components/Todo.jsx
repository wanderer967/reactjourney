import { useState } from "react";
import Todoitem from "./Todoitem";

export default function Todo() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
          type="type"
        />
        <button type="submit">ADD</button>
      </form>
      {todos.map((item) => (
        <Todoitem key={item} item={item} />
      ))}
    </div>
  );
}
