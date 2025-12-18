export type Task = {
    id: number;
    title: string;
    description?: string;
    createdAt: Date;
    updatedAt: Date;
    completed: boolean;
    priority: 'low' | 'medium' | 'high';
    projectId: number;
    active: boolean;
}

export type TaskProps = {
    task: Task;
    onToggleTask: (taskId: number, currentCompleted: boolean) => void;
}