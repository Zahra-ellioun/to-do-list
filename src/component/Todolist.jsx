import React, { useEffect, useState } from "react";
import { dataToDoList } from "../data/data";
import { Link } from "react-router-dom";

const Todolist = () => {
  const [todoData, setTodoData] = useState(dataToDoList);

  const editToDo = (id) => {
    // console.log(id);
  };

  // delete item in the to do list
  const deleteTodo = (index) => {
    console.log(`deleting entry id --> ${index}`);
    console.log(
      `this is the entry status before deleting --> ${todoData[index].isDeleted}`
    );
    todoData[index].isDeleted = false;

    console.log(
      `this is the entry status after deleting ${todoData[index].isDeleted}`
    );
  };

  // useEffect(() => {
  //   setTodoData(newData);
  // }, [newData]);

  return (
    <div className="w-full min-h-full">
      <div className="mx-3 my-5 bg-gray-100 rounded-md min-h-[400px] shadow-xl relative">
        <h1 className="text-5xl text-bold text-center uppercase py-5 ">
          <Link
            to="add"
            className=" absolute top-2 right-2 px-3 py-2 rounded-lg shadow-md bg-green-400 text-lg m-5"
          >
            add item
          </Link>

          <div className="grid grid-cols-2 gap-4 pt-20 ">
            {todoData.map((data, index) => {
              if (!data.isDeleted) {
                return (
                  <div key={index}>
                    <div className="flex flex-col text-sm gap-4 bg-gray-200 p-4 rounded-lg shadow-md ">
                      <div className="flex gap-2 justify-between items-center">
                        <div className="flex space-x-6">
                          <input
                            id={data.id}
                            type="checkbox"
                            defaultChecked
                            className="mx-2"
                          />
                          <div className="">{data.date} : </div>
                          <div className="">{data.todo}</div>
                        </div>
                        <div className="flex gap-2">
                          <button
                            onClick={(data) => {
                              editToDo(data.id);
                            }}
                            className="p-2 rounded-md bg-yellow-300"
                          >
                            edit
                          </button>
                          <button
                            onClick={() => deleteTodo(index)}
                            className="p-2 rounded-md bg-red-500"
                          >
                            delete
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </h1>
      </div>
    </div>
  );
};

export default Todolist;
