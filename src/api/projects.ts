import type { ProjectWithTasks } from "../types/project.types";
import { apiClient } from "./client";

// GET /api/projects-with-tasks returns an array of projects each with tasks[]
export const fetchProjectsWithTasks = () =>
    apiClient.get<ProjectWithTasks[]>('/api/projects/projects-with-tasks');