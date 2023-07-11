import {create} from "zustand";
import  Task  from "../models/TaskModel";

const isServer = typeof window === "undefined";

const getSavedTasks = ():typeof Task[] => {
  if (isServer) {
    return [];
  }

  const tasksJSON = localStorage.getItem("tasks");
  return tasksJSON ? JSON.parse(tasksJSON) : [];
};

const saveTasks = (tasks:typeof Task[]) => {
  if (!isServer) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
};

interface TaskStoreState {
  tasks:typeof Task[];
  addTask: (task:typeof Task) => void;
  deleteTask: (taskId: string) => void;
  updateTaskTitle: (taskId: string, title: string) => void;
  updateTaskDescription: (taskId: string, description: string) => void;
  updateTaskStatus: (taskId: string, status: string) => void;
  updateTask: (taskId: string, updatedTask:typeof Task) => void;
}

export const useTaskStore = create<TaskStoreState>((set) => ({
  tasks: getSavedTasks(),
  addTask: (task) => {
    set((state) => {
      const updatedTasks = [...state.tasks, task];
      saveTasks(updatedTasks);
      return { tasks: updatedTasks };
    });
  },
  deleteTask: (taskId) => {
    set((state) => {
      const updatedTasks = state.tasks.filter((task) => task.id !== taskId);
      saveTasks(updatedTasks);
      return { tasks: updatedTasks };
    });
  },
  updateTaskTitle: (taskId, title) => {
    set((state) => {
      const updatedTasks = state.tasks.map((task) =>
        task.id === taskId ? { ...task, title } : task
      );
      saveTasks(updatedTasks);
      return { tasks: updatedTasks };
    });
  },
  updateTaskDescription: (taskId, description) => {
    set((state) => {
      const updatedTasks = state.tasks.map((task) =>
        task.id === taskId ? { ...task, description } : task
      );
      saveTasks(updatedTasks);
      return { tasks: updatedTasks };
    });
  },
  updateTaskStatus: (taskId, status) => {
    set((state) => {
      const updatedTasks = state.tasks.map((task) =>
        task.id === taskId ? { ...task, status } : task
      );
      saveTasks(updatedTasks);
      return { tasks: updatedTasks };
    });
  },
  updateTask: (taskId, updatedTask) => {
    set((state) => {
      const updatedTasks = state.tasks.map((task) =>
        task.id === taskId ? { ...updatedTask } : task
      );
      saveTasks(updatedTasks);
      return { tasks: updatedTasks };
    });
  },
}));


