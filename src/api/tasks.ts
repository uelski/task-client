import type { Task} from "../types/task.types";
import { apiClient } from "./client";

// GET /api/tasks returns an array of tasks
export const toggleTaskCompletion = (taskId: number, isCompleted: boolean) =>
    apiClient.patch<Task>(`/api/tasks/${taskId}`, { isCompleted });