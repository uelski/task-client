export type Task = {
    id: number;
    title: string;
    description?: string;
    createdAt: Date;
    completed: boolean;
    priority: 'low' | 'medium' | 'high';
    projectId: string;
}

export type TaskProps = {
    task: Task;
    onToggleTask: (taskId: number, currentCompleted: boolean) => void;
}