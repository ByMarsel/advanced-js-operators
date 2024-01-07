const DEFAULT_KEY = "todo-storage-key";
const DEFAULT_FILTERS_KEY = "todo-filters";

export class StorageController {
  key = "todo-storage-key";
  filtersKey = "todo-filters";

  // Параметры по умолчанию (один и несколько)
  /** key = DEFAULT_KEY*/
  constructor(key = DEFAULT_KEY, filtersKey = DEFAULT_FILTERS_KEY) {
    this.key = key;
  }

  addTask(task) {
    const data = this.load();

    this.save([task, ...data]);
  }

  deleteTask(id) {
    if (id) {
      const data = this.load();
      const copy = data.filter((item) => item.id !== id);

      this.save(copy);
    }
  }

  updateTask(id, newData) {
    const tasks = this.load();
    const tasksById = tasks.filter((item) => item.id === id);

    if (tasksById.length) {
      const indexOfTask = tasks.indexOf(tasksById[0]);

      const left = tasks.slice(0, indexOfTask);
      const right = tasks.slice(indexOfTask + 1);

      const newTask = { ...tasksById[0], ...newData };

      this.save([...left, newTask, ...right]);
    }

    /*
    if (tasksById.length === 1) {
      const task = tasksById[0];

      for (const key in task) {
        if (newData[key]) {
          newTask[key] = newData[key];
        } else {
          newTask[key] = task[key];
        }
      }
    }*/
  }

  moveCompletedToBottom(isEnabled) {
    if (isEnabled) {
      const data = this.load();
      const completed = data.filter((item) => item.completed);
      const notCompleted = data.filter((item) => !item.completed);

      completed.sort((a, b) => b.date - a.date);

      notCompleted.sort((a, b) => b.date - a.date);

      this.save([...notCompleted, ...completed]);
    } else {
      const data = this.load();

      data.sort((a, b) => b.date - a.date);

      this.save(data);
    }
  }

  load() {
    const data = window.localStorage.getItem(this.key);

    return !data ? [] : JSON.parse(data);
  }

  save(data) {
    window.localStorage.setItem(this.key, JSON.stringify(data));
  }

  saveFilters(filters) {
    window.localStorage.setItem("todo-filters", JSON.stringify(filters));
  }
}
