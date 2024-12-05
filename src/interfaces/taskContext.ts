import { ReactNode } from 'react';

export interface ITasks {
  id: number;
  text: string;
  completed: boolean;
}

export interface ITaskContext {
  children: ReactNode;
}

export type TToggleTaskStatus = (taskId: number) => Promise<void>;

export interface IContext {
  tasks: ITasks[];
  addTask: (task: ITasks) => Promise<void>;
  toggleTaskStatus: TToggleTaskStatus;
  clearCompletedTasks: () => Promise<void>;
  loadTasks: () => Promise<void>;
}
