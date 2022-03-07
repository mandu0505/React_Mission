import React, { useState, useCallback, useEffect } from "react";
import "./App.css";
import Lists from "./components/Lists";
import Form from "./components/Form";

export default function App() {
  const [todoData, setTodoData] = useState(
    JSON.parse(localStorage.getItem("todoData")) || []
  );
  const [value, setValue] = useState("");

  useEffect(() => {
    console.log("todoData: ", todoData);
    localStorage.setItem("todoData", JSON.stringify(todoData));
  }, [todoData]);

  const handleSubmit = (e) => {
    e.preventDefault();

    let newTodo = {
      id: Date.now(),
      title: value,
      completed: false,
      isEdit: false,
    };

    setTodoData((prev) => [...prev, newTodo]);
    setValue("");
  };

  const deleteAll = () => {
    let newTodoData = [];
    setTodoData(newTodoData);
  };

  const handleClick = useCallback(
    (id) => {
      let newTodoData = todoData.filter((data) => data.id !== id);
      setTodoData(newTodoData);
    },
    [todoData]
  );

  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <div className="w-full p-6 m-4 bg-white rounded shadow lg:w-3/4 lg:max-w-lg">
        <div className="flex justify-between mb-3">
          <h1>할 일 목록</h1>
          <button
            className="p-2 text-black border-2 border-black rounded hover:text-white hover:bg-red-200"
            onClick={deleteAll}
          >
            모두 지우기
          </button>
        </div>
        <Lists
          handleClick={handleClick}
          todoData={todoData}
          setTodoData={setTodoData}
        />
        <Form handleSubmit={handleSubmit} value={value} setValue={setValue} />
      </div>
    </div>
  );
}
