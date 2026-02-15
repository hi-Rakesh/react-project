import React, {use, useEffect, useState} from "react";
import {Pencil, Trash} from "lucide-react";

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (inputValue.trim() == "") {
      return;
    }

    const newTodo = {
      id: Date.now(),
      text: inputValue,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    console.log(todos);
    setInputValue("");
  };

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gray-200">
      <div className="bg-white p-8 rounded-2xl shadow-md  w-[60%] h-[90%]">
        <h1 className="text-2xl font-bold text-center mb-4">Todo App</h1>
        <div className=" my-3 flex-row flex gap-2 px-24 items-center justify-center">
          <input
            type="text"
            name="inputValue"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Add a new task"
            className=" w-full border border-gray-300 active:border-blue-500 focus:outline-none focus:border-slate-400 hover:border-blue-400 rounded-md p-2"
          />
          <button
            onClick={addTodo}
            id="addTask"
            className="w-24 bg-blue-400 hover:bg-blue-600 text-white p-2 px-2 rounded-md">
            Add Task
          </button>
        </div>
        <div className="flex flex-col gap-3 mt-4 overflow-y-auto px-24 h-[70%]">
          {todos.length == 0 && (
            <p className="text-center text-gray-500">No tasks added yet</p>
          )}
          {todos.map((todo) => (
            <div
              key={todo.id}
              className="flex items-center justify-between bg-gray-100 p-3 rounded-md">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="w-4 h-4"
                  name={todo.id}
                  id={todo.id}
                  checked={todo.completed}
                  onChange={() => {
                    setTodos(
                      todos.map((t) =>
                        t.id === todo.id ? {...t, completed: !t.completed} : t,
                      ),
                    );
                  }}
                />
                <span
                  className={
                    todo.completed ? "line-through text-gray-500" : ""
                  }>
                  {todo.text}
                </span>
              </div>
              <div className="flex gap-2">
                {todo.completed &&
                  <button
                    onClick={() =>
                      setTodos(todos.filter((t) => t.id !== todo.id))
                    }
                    className=" text-red-500 p-1 rounded-md">
                    <Trash />
                  </button>
                }
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center mt-4">
          <button
            onClick={() => setTodos([])}
            className="w-24 bg-red-400 hover:bg-red-600 text-white p-2 px-2 rounded-md">
            Clear All
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
