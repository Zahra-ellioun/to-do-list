import React, { useEffect, useState } from "react";
import { dataToDoList } from "../data/data";
import { useNavigate } from "react-router-dom";
import { number } from "yup";

// const [task, setTask] = useState({});

const AddItem = () => {
  const navigate = useNavigate();

  const addTask = () => {
    let dateTaskItem = document.getElementById("date").value;
    let todoTaskItem = document.getElementById("todo").value;

    // find id for new to do list item
    let maxIndex = 0;
    dataToDoList.forEach((element) => {
      if (element.id > maxIndex) maxIndex = element.id;
    });

    // new to do list item
    let taskToadd = {
      id: ++maxIndex,
      date: dateTaskItem,
      todo: todoTaskItem,
      status: "Backlog",
      isDeleted: false,
    };

    // add new to do list item to to do list array
    dataToDoList.push(taskToadd);
    console.log(dataToDoList);

    navigate("/");
  };

  return (
    <div className="w-full min-h-full">
      <div className="mx-3 my-5 bg-gray-100 rounded-md min-h-[400px] shadow-xl">
        <h1 className="text-4xl text-bold text-center uppercase py-5 ">
          add new to do list
        </h1>
        <div className="m-3 flex flex-col space-y-3">
          <input
            id="date"
            name="date"
            type="text"
            placeholder="date"
            className="px-2 py-2 rounded-lg shadow-lg w-[450px]"
          />
          <input
            id="todo"
            name="todo"
            type="text"
            placeholder="task info"
            className="px-2 py-2 rounded-lg shadow-lg w-[450px]"
          />
          <br />
          <button
            className="px-3 py-2 bg-green-600 rounded-md w-[450px]"
            onClick={addTask}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};
export default AddItem;
