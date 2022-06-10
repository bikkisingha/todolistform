import { useState } from "react";
import "./style.css";
const Todo = (props) => {
  const {
    description,
    completed,
    markComplete,
    deleteTask,
    updateDescription,
  } = props;
  const [isEdit, setEdit] = useState(false);
  const [tempDescription, updateTempDescription] = useState(description);
  const handleCheck = () => {
    markComplete();
  };
  const handleEditClick = () => {
    setEdit((prevValue) => !prevValue);
  };
  const handleDescriptionChange = (event) => {
    updateTempDescription(event.target.value);
  };

  return (
    <div>
      <div>
        {!isEdit && (
          <div>
            <input
              type="checkbox"
              name="task-description"
              id="task-description"
              onChange={handleCheck}
            />
            <label
              className={completed ? " completed-todo " : ""}
              htmlFor="task-description"
            >
              {" "}
              {description}
            </label>
          </div>
        )}
        {isEdit && (
          <div>
            <input
              type="text"
              value={tempDescription}
              onChange={handleDescriptionChange}
            />

            <button
              onClick={() => {
                updateDescription(tempDescription);
                setEdit(false);
              }}
            >
              updateDescription
            </button>
          </div>
        )}
      </div>
      {completed ? (
        ""
      ) : (
        <div>
          <button onClick={handleEditClick}>Edit Todo</button>

          <button
            onClick={() => {
              deleteTask();
            }}
          >
            DELETE LIST
          </button>
        </div>
      )}
    </div>
  );
};
export default Todo;
