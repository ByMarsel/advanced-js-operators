import { generateId } from "./utils";

export const AddTask = ({ onAddTask }) => {
  const handleClick = () => {
    const id = generateId();
    const input = document.getElementById("add-task-input");
    const value = input?.value;

    onAddTask?.({ value, id, date: Date.now() });
    input.value = "";
  };

  return (
    <div class="d-flex flex-row">
      <input
        id="add-task-input"
        type="text"
        class="form-control w-25 me-2"
        placeholder="Введите задачу"
      />
      <button onClick={handleClick} class="btn btn-primary">
        Добавить задачу
      </button>
    </div>
  );
};
