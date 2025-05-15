import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import './TodoApp.css';

export default function TodoApp() {
  const [todos, setTodos] = useState([
    { task: "Sample Task", id: uuidv4(), isDone: false },
  ]);
  const [newTodo, setNewTodo] = useState("");

  const handleAddNewTasks = (e) => {
    e.preventDefault();
    // setTodos([...todos, { task: newTodo, id: uuidv4() }]);
    setTodos((prevTodos) => {
      return [...prevTodos, { task: newTodo, id: uuidv4(), isDone: false }];
    });
    setNewTodo("");
  };

  const handleUpdateTodo = (event) => {
    setNewTodo(event.target.value);
  };

  const handleDeleteTodo = (id) => {
    // console.log(id);
    // const copy = todos.filter((todo) => todo.id != id);
    // console.log(copy);
    setTodos(() => todos.filter((prevTodo) => prevTodo.id != id));
  };

  const handleEditTodo = (id, newTask) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, task: newTask } : todo
      )
    );
  };

  const upperCaseAll = () => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        return {
          ...todo,
          task: todo.task.toUpperCase(),
        };
      })
    );
  };

  const lowerCaseAll = () => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        return {
          ...todo,
          task: todo.task.toLowerCase(),
        };
      })
    );
  };

  const upperCaseOne = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            task: todo.task.toUpperCase(),
          };
        } else {
          return todo;
        }
      })
    );
  };

  const lowerCaseOne = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            task: todo.task.toLowerCase(),
          };
        } else {
          return todo;
        }
      })
    );
  };

  const markAsDone = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            isDone: true,
          };
        } else {
          return todo;
        }
      })
    );
  };

  const markAsDoneAll = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            isDone: true,
          };
        } else {
          return todo;
        }
      })
    );
  };

  return (
    <div className="app">
      <div className="todo-container">
        <h1 className="title">Todo App</h1>
        <form className="todo-form">
          <input
            type="text"
            placeholder="Enter your task"
            value={newTodo}
            onChange={handleUpdateTodo}
          />
          <button type="submit" onClick={handleAddNewTasks}>
            Add Task
          </button>
        </form>
        <hr />
        <h2 className="task-title">Tasks Todo</h2>
        <ul className="task-list">
        {todos.map((todo) => (
          <li key={todo.id}>
            <span className={`task-text ${todo.isDone ? "task-done" : ""}`}>
              {todo.task}
            </span>
            <div className="task-actions">
              <button className="edit-btn" onClick={() => {
                const newTask = prompt("Enter the new task:", todo.task);
                if (newTask !== null && newTask.trim() !== "") {
                  setTodos(
                    todos.map((t) =>
                      t.id === todo.id ? { ...t, task: newTask } : t
                    )
                  );
                }
              }}>
                ✏️
              </button>
              <button className="delete-btn" onClick={() => handleDeleteTodo(todo.id)}>
                🗑️
              </button>
              <button className="action-btn" onClick={() => markAsDone(todo.id)}>
                ✅
              </button>
            </div>
          </li>
        ))}
      </ul>
        <br />
        <div className="bulk-actions">
          <button onClick={upperCaseAll}>Uppercase All</button>
          <button onClick={lowerCaseAll}>Lowercase All</button>
          <button onClick={markAsDoneAll}>Mark All As Done</button>
        </div>
      </div>
    </div>
  );


  // return (
  //   <div>
  //     <h1>Todo App</h1>
  //     <form
  //       style={{
  //         marginBottom: "20px",
  //         display: "flex",
  //         flexDirection: "column",
  //         gap: "10px",
  //       }}
  //     >
  //       <input
  //         type="text"
  //         placeholder="Enter your task"
  //         value={newTodo}
  //         onChange={handleUpdateTodo}
  //         style={{ border: "none", borderRadius: "6px", padding: "13px" }}
  //       />
  //       <button type="submit" onClick={handleAddNewTasks}>
  //         Add Task
  //       </button>
  //     </form>
  //     <hr></hr>
  //     <h2>Tasks Todo</h2>
  //     <ul>
  //       {todos.map((todo) => (
  //         <li key={todo.id}>
  //           <span
  //             style={
  //               todo.isDone
  //                 ? {
  //                     textDecoration: "line-through",
  //                     cursor: "pointer",
  //                     color: "gray",
  //                   }
  //                 : {}
  //             }
  //           >
  //             {todo.task}
  //           </span>
  //           <i
  //             className="fa-solid fa-trash"
  //             style={{ color: "red", marginLeft: "20px", marginBottom: "20px" }}
  //             onClick={() => handleDeleteTodo(todo.id)}
  //           ></i>
  //           <button
  //             style={{ marginLeft: "20px" }}
  //             onClick={() => upperCaseOne(todo.id)}
  //           >
  //             Uppercase One
  //           </button>
  //           <button
  //             style={{ marginLeft: "20px" }}
  //             onClick={() => lowerCaseOne(todo.id)}
  //           >
  //             Lowercase One
  //           </button>
  //           <button
  //             style={{ marginLeft: "20px" }}
  //             onClick={() => markAsDone(todo.id)}
  //           >
  //             Mark As Done
  //           </button>
  //           <button
  //             style={{ marginLeft: "20px" }}
  //             onClick={() => {
  //               const newTask = prompt("Enter the new task:", todo.task); // Prompt user for input
  //               if (newTask !== null && newTask.trim() !== "") {
  //                 handleEditTodo(todo.id, newTask);
  //               }
  //             }}
  //           >
  //             Update Todo
  //           </button>
  //         </li>
  //       ))}
  //     </ul>
  //     <br></br>
  //     <div
  //       style={{
  //         display: "flex",
  //         justifyContent: "space-evenly",
  //         alignItems: "center",
  //       }}
  //     >
  //       <button onClick={upperCaseAll}>Uppercase All</button>
  //       <button onClick={lowerCaseAll}>Lowercase All</button>
  //       <button onClick={markAsDoneAll}>Mark As All Done</button>
  //     </div>
  //   </div>
  // );
}
