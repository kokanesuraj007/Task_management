import { useState } from "react";
import { observer } from "mobx-react-lite";
import { useTaskStore } from "../stores/TaskStore";
import TaskItem from "./TaskItem";
import TaskEditForm from "./TaskEditForm";
import dynamic from "next/dynamic";

const TaskList = observer(() => {
  const taskStore = useTaskStore();
  const [editableTaskId, setEditableTaskId] = useState<string | null>(null);

  const handleEditClick = (taskId: string) => {
    setEditableTaskId(taskId);
  };

  const handleCancelEdit = () => {
    setEditableTaskId(null);
  };

  const handleSaveEdit = (taskId: string, title: string, description: string) => {
    taskStore.updateTask(taskId, title, description);
    setEditableTaskId(null);
  };

  const todoTasks = taskStore.tasks.filter((task) => task.status === "To Do").length;
  const progressTasks = taskStore.tasks.filter((task) => task.status === "Progress").length;
  const closedTasks = taskStore.tasks.filter((task) => task.status === "Closed").length;

  return (
    <div>
      <h2>Tasks:</h2>
      <div>Total Tasks: {taskStore.tasks.length}</div>
      <div>Todo Tasks: {todoTasks}</div>
      <div>Progress Tasks: {progressTasks}</div>
      <div>Closed Tasks: {closedTasks}</div>
      {taskStore.tasks.map((task) => (
        <div key={task.id}>
          {editableTaskId === task.id ? (
            <TaskEditForm
              task={task}
              onSave={(title, description) => handleSaveEdit(task.id, title, description)}
              onCancel={handleCancelEdit}
            />
          ) : (
            <TaskItem
              task={task}
              onEditClick={() => handleEditClick(task.id)}
              onDeleteClick={() => taskStore.deleteTask(task.id)}
            />
          )}
        </div>
      ))}
    </div>
  );
});

export default dynamic(() => Promise.resolve(TaskList), { ssr: false });
