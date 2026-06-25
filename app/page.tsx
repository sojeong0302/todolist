"use client";

import { useEffect, useState } from "react";

const page = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const getTodos = async () => {
      const response = await fetch("http://localhost:4000/todos");
      const data = await response.json();

      setTodos(data);
    };
    getTodos();
  }, []);

  return (
    <div>
      <h1>TODOLIST</h1>
      {todos.map((todo) => {
        return (
          <div key={todo.id} className="border">
            <p>{todo.title}</p>
            <p>{todo.done ? "완료" : "미완료"}</p>
          </div>
        );
      })}
    </div>
  );
};

export default page;
