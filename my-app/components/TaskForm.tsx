import { useState } from "react";
import { useTaskStore } from "../stores/TaskStore";
import  Task  from "../models/TaskModel";
import dynamic from "next/dynamic";

const TaskForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const taskStore = useTaskStore();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const task:typeof Task = {
      id: Date.now().toString(),
      title,
      description,
      status: "To Do",
    };
    taskStore.addTask(task);
    setTitle("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Task:</h2>
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
      <button type="submit">Add Task</button>
    </form>
  );
};

export default dynamic (() => Promise.resolve(TaskForm), {ssr: false});
