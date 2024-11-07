import { useState } from "react";

export default function Todo() {
  const [todo, setTodo] = useState("");

  return (
    <div>
      <form>
        <input
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
          type="type"
        />
        <button type="submit">ADD</button>
      </form>
    </div>
  );
}
