"use client";

import type { Todo } from "@/types"; //그냥 import 해도되지만 type 붙여주면 가독성⬆️
import { useEffect, useState } from "react";

const page = () => {
  const [todos, setTodos] = useState<
    Todo[] //배열인거 표현하고 싶으면 뒤에 대괄호[] 넣기
  >([]);

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
