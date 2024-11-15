import { Routes, Route } from "react-router-dom";
import { Todolist, AddItem } from "./component/Index.jsx";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Todolist />} />

        <Route path="/add" element={<AddItem task={task} setTask={setTask} />} />
      </Routes>
    </>
  );
};

export default App;
