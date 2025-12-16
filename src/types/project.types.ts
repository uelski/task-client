import type { Task } from "./task.types";


export type Project = {
    id: number;
    title: string;
    description?: string;
    createdAt: Date;
    updatedAt: Date;
  };
  
export type ProjectWithTasks = Project & {
    tasks: Task[];
};

export type ProjectProps = {
    project: ProjectWithTasks;
    onToggleTask: (taskId: number, currentCompleted: boolean) => void;
  };