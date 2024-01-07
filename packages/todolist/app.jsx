import { AddTask } from "./components/add-task";
import { Task } from "./components/task";
import { StorageController } from "./controllers/storage-controller";
import { render } from "./render";

const storage = new StorageController();

let moveCompletedToBottom = false;

export const App = () => {
  const tasks = storage.load();

  const handleTaskDelete = (id) => {
    storage.deleteTask(id);
    render();
  };

  const handleTaskAdd = ({ value, id, date }) => {
    storage.addTask({ value, id, date });
    render();
  };

  const handleMoveToBottom = ({ target: { checked } }) => {
    storage.moveCompletedToBottom(checked);
    moveCompletedToBottom = checked;
    render();
  };

  const handleTaskChange = (id, data) => {
    storage.updateTask(id, data);
    render();
  };

  return (
    <div class="container">
      <h1>Список задач</h1>
      <div class="pb-3 pt-3">
        <AddTask onAddTask={handleTaskAdd} />
        <div class="mt-3">
          <input
            type="checkbox"
            id="filter-checkbox"
            class="form-check-input me-1"
            checked={moveCompletedToBottom}
            onChange={handleMoveToBottom}
          />
          <label for="filter-checkbox" class="form-check-label">
            Перенести выполненные в конец
          </label>
        </div>
      </div>
      <ul class="list-group w-75">
        {tasks.map((task) => (
          <Task
            key={task.id}
            id={task.id}
            value={task.value}
            completed={task.completed}
            onDelete={handleTaskDelete}
            onChange={handleTaskChange}
          />
        ))}
      </ul>
    </div>
  );
};
