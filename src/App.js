import "./App.css";
import Header from "./components/Header/Header";
import Form from "./components/Form";
import Todo from "./components/Todo";
import { useState } from "react";
// import "./header.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const addTasks = (task) => {
    setTasks([...tasks, task]);
  };
  const markTodoComplete = (completedTask) => {
    const newTask = tasks.map((task) => {
      if (task.taskID === completedTask.taskID) {
        task.completed = !task.completed;
      }
      return task;
    });
    setTasks(newTask);
  };
  const deleteTodo = (deleteTask) => {
    const newTask = tasks.filter((task) => task.taskID !== deleteTask.taskID);
    setTasks(newTask);
  };
  const updateDescription = (updateTask, updateDescription) => {
    const newTask = tasks.map((task) => {
      if (task.taskID === updateTask.taskID) {
        task.description = updateDescription;
      }
      return task;
    });
    setTasks(newTask);
  };

  return (
    <div>
      <Header title="TODO LIST APP" />

      <main>
        <Form addTasks={addTasks} />
        <div>
          <button>ALL</button>
          <button>ACTIVE</button>
          <button>COMPLETE</button>
        </div>
        <div>
          {tasks.map((task) => {
            return (
              <Todo
                key={task.taskID}
                description={task.description}
                completed={task.completed}
                markComplete={() => {
                  markTodoComplete(task);
                }}
                deleteTask={() => {
                  deleteTodo(task);
                }}
                updateDescription={(description) => {
                  updateDescription(task, description);
                }}
              />
            );
          })}
        </div>
      </main>
    </div>
  );
}

export default App;
