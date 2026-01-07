import type { ProjectWithTasks } from "../types/project.types";
import { apiClient } from "./client";
import type { AddProjectProps } from "../types/project.types";

// GET /api/projects-with-tasks returns an array of projects each with tasks[]
export const fetchProjectsWithTasks = () =>
    apiClient.get<ProjectWithTasks[]>('/api/projects/projects-with-tasks');

// POST /api/projects creates a new project
export const addProject = (project: AddProjectProps) =>
    apiClient.post<ProjectWithTasks>('/api/projects', project);

// DELETE /api/projects/:id deletes a project
export const deleteProject = (id: number) =>
    apiClient.delete<ProjectWithTasks>(`/api/projects/${id}`);