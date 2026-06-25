"use client";

import TodoList from "@/components/TodoList";
import type { Todo } from "@/types"; //그냥 import 해도되지만 type 붙여주면 가독성⬆️
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

const page = () => {
  //   const [todos, setTodos] = useState<
  //     Todo[] //배열인거 표현하고 싶으면 뒤에 대괄호[] 넣기
  //   >([]);

  //   useEffect(() => {
  //     const getTodos = async () => {
  //       const response = await fetch("http://localhost:4000/todos");
  //       const data = await response.json();

  //       setTodos(data);
  //     };
  //     getTodos();
  //   }, []);

  const {
    data: todos,
    isLoading,
    isError,
  } = useQuery<Todo[]>({
    queryKey: ["todos"],
    queryFn: async () => {
      const response = await fetch("http://localhost:4000/todos");
      const data = await response.json();
      return data;
    },
  });

  if (isLoading) {
    return <p>로딩 중 입니다 ~.~</p>;
  }

  if (isError) {
    return <p>에러가 발생했습니다 ~.~</p>;
  }

  return (
    <div>
      <h1>TODOLIST</h1>
      {/* 데이터가 아직 없을 수도 있으니까 널 병합 연산자 사용[=??]*/}
      {/* 삼항 연산자는 false, 0, "", [] 모두 거짓 처리가 되니까 널 병합 연산자가 더 적합*/}
      <TodoList todos={todos ?? []} />
    </div>
  );
};

export default page;
