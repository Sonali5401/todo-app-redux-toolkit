import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateTodo } from "../features/todoSlice";

export default function EditTodo({ todo, onFinishEdit }) {
  const [updatedValue, setUpdatedValue] = useState(todo.text);
  const dispatch = useDispatch();

  const handleUpdate = () => {
    dispatch(updateTodo({ id: todo.id, text: updatedValue }));
    onFinishEdit();
  };

  return (
    <>
      <input
        type="text"
        value={updatedValue}
        onChange={(e) => setUpdatedValue(e.target.value)}
      />
      <button onClick={handleUpdate}>Update</button>
    </>
  );
}
