import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todoSlice";
export default AddTodo = () => {
  const [inputText, setInputText] = useState("");
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    dispatch(addTodo(inputText));
    setInputText("");
  };
  return (
    <div>
      <div>Add to your To Do List : </div>
      <input
        type="text"
        placeholder="Add your text here..."
        value={inputText}
        onChange={(e) => setInputText(e?.target?.value)}
      />
      <button
        onClick={() => {
          handleAddTodo();
        }}
      >
        +
      </button>
    </div>
  );
};
