import "./styles.css";
import AddTodo from "./components/AddTodo";
import DisplayTodo from "./components/DisplayTodo";

export default function App() {
  return (
    <div className="App">
      <AddTodo />
      <DisplayTodo />
    </div>
  );
}
