export const Task = ({ id, value, completed = false, onDelete, onChange }) => {
  const handleDelete = () => {
    onDelete?.(id);
  };

  const handleChange = (event) => {
    onChange?.(id, { completed: event.target.checked });
  };

  return (
    <li class={`list-group-item d-flex ${completed ? "text-bg-light" : ""}`}>
      <input
        id={id}
        type="checkbox"
        class="form-check-input me-1"
        checked={completed}
        onChange={handleChange}
      />
      <label
        class={`form-check-label ${
          completed ? "text-decoration-line-through text-secondary" : ""
        }`}
        for={id}
      >
        {value}
      </label>
      <button onClick={handleDelete} class="btn btn-link btn-sm ms-auto">
        yдалить
      </button>
    </li>
  );
};
