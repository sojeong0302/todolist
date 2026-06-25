import type { Todo } from "@/types";

const TodoList = ({ todos }: { todos: Todo[] }) => {
  return (
    <div>
      {todos?.map((todo) => {
        //만약 없을 수도 있으니까 옵셔널 체이닝[=?] 넣어주기
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

export default TodoList;
