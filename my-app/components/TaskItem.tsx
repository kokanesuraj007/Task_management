import { observer } from "mobx-react-lite";
import  Task  from "../models/TaskModel";
import dynamic from "next/dynamic";

interface TaskItemProps {
  task:typeof Task;
  onEditClick: () => void;
  onDeleteClick: () => void;
}

const TaskItem = observer(({ task, onEditClick, onDeleteClick }: TaskItemProps) => {
  return (
    <div>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p>Status: {task.status}</p>
      <button onClick={onEditClick}>Edit</button>
      <button onClick={onDeleteClick}>Delete</button>
    </div>
  );
});

export default dynamic (() => Promise.resolve(TaskItem), {ssr: false});
