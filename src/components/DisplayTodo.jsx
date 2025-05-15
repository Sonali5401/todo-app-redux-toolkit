import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todoSlice";
import EditTodo from "./EditTodo";

export default DisplayTodo = () => {
  const [editTodoId, setEditTodoId] = useState(null);

  const todoList = useSelector((state) => state?.todos);
  const dispatch = useDispatch();

  return (
    <div>
      {todoList?.map((todo) => {
        return (
          <div key={todo?.id}>
            {editTodoId === todo?.id ? (
              <EditTodo todo={todo} onFinishEdit={() => setEditTodoId(null)} />
            ) : (
              <span>{todo?.text}</span>
            )}
            {editTodoId !== todo?.id && (
              <button onClick={() => setEditTodoId(todo?.id)}>Edit</button>
            )}
            <button
              onClick={() => {
                dispatch(removeTodo(todo?.id));
              }}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
};
