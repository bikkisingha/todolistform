import { useState } from "react";
import "./style.css";

const Form = (props) => {
  const { addTasks } = props;
  const [description, setDescription] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    const task = {
      taskID: Math.random(),
      description,
      completed: false,
    };
    addTasks(task);
  };
  const handleDescriptionChange = (event) => {
    //monitor what you type
    console.log(event.target.value);
    setDescription(event.target.value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="Add task">What do you want to?</label>
      <div className="row">
        <input
          type="text"
          name="Add task"
          id="Add task"
          placeholder="Enter task here...."
          value={description}
          onChange={handleDescriptionChange}
        />
        <button type="submit">Add task</button>
      </div>
    </form>
  );
};
export default Form;
