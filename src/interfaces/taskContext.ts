import { ReactNode } from 'react';

export type TCompleted = 'done' | 'ready' | 'progress';

export interface TValidationTask {
  done: 'ready';
  progress: 'done';
  ready: 'progress';
}

export interface ITasks {
  id: number;
  text: string;
  completed: TCompleted;
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
  deleteTask: TToggleTaskStatus;
}
