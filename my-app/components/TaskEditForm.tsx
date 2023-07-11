import { useState } from "react";
import Task from "../models/TaskModel";

interface TaskEditFormProps {
  task: Task;
  onSave: (updatedTask: Task) => void;
  onCancel: () => void;
}

const TaskEditForm = ({ task, onSave, onCancel }: TaskEditFormProps) => {
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [status, setStatus] = useState(task.status);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const updatedTask: Task = {
      ...task,
      title,
      description,
      status,
    };
    onSave(updatedTask);
  };

  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setStatus(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Edit Task:</h3>
      <label htmlFor="title">Title:</label>
      <input
        type="text"
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label htmlFor="description">Description:</label>
      <textarea
        id="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <label htmlFor="status">Status:</label>
      <select id="status" value={status} onChange={handleStatusChange}>
        <option value="Todo">Todo</option>
        <option value="Progress">Progress</option>
        <option value="Closed">Closed</option>
      </select>
      <button type="submit">Save</button>
      <button type="button" onClick={onCancel}>
        Cancel
      </button>
    </form>
  );
};

export default TaskEditForm;
