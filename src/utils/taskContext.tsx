import React, { createContext, useState, useContext } from 'react';

import { IContext, ITaskContext, ITasks } from 'interfaces';

import { getTaskData, setTaskData } from './taskStorage';

const TaskContext = createContext<IContext | undefined>(undefined);

export const TaskProvider = ({ children }: ITaskContext): any => {
  const [tasks, setTasks] = useState<ITasks[]>([]);

  const loadTasks = async () => {
    const storedTasks = await getTaskData('tasks');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  };

  const addTask = async (task: ITasks) => {
    const updatedTasks: ITasks[] = [...tasks, task];
    console.log(updatedTasks);
    setTasks(updatedTasks);
    await setTaskData('tasks', updatedTasks);
  };

  const toggleTaskStatus = async (taskId: number) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
    await setTaskData('tasks', updatedTasks);
  };

  const clearCompletedTasks = async () => {
    setTasks([]);
    await setTaskData('tasks', []);
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        addTask,
        toggleTaskStatus,
        clearCompletedTasks,
        loadTasks,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export const useTaskContext = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error('useTaskContext must be used within a TaskContextProvider');
  }
  return context;
};
