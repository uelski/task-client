// src/hooks/useProjects.ts
import { useEffect, useState } from 'react';
import {
  fetchProjectsWithTasks,
} from '../api/projects';
import { toggleTaskCompletion } from '../api/tasks';
import type { ProjectWithTasks } from '../types/project.types';

type UseProjectsResult = {
  projects: ProjectWithTasks[];
  isLoading: boolean;
  error: string | null;
  refresh: () => void;
  toggleTask: (taskId: number, currentCompleted: boolean) => Promise<void>;
};

export function useProjects(): UseProjectsResult {
  const [projects, setProjects] = useState<ProjectWithTasks[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadProjects = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const data = await fetchProjectsWithTasks();
      setProjects(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load projects');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadProjects();
  }, []);

  const toggleTask = async (taskId: number, currentCompleted: boolean) => {
    // optimistic update
    setProjects((prev) =>
      prev.map((project) => ({
        ...project,
        tasks: project.tasks.map((t) =>
          t.id === taskId ? { ...t, isCompleted: !currentCompleted } : t
        ),
      }))
    );

    try {
      await toggleTaskCompletion(taskId, !currentCompleted);
    } catch (err) {
      // rollback on failure
      setProjects((prev) =>
        prev.map((project) => ({
          ...project,
          tasks: project.tasks.map((t) =>
            t.id === taskId ? { ...t, isCompleted: currentCompleted } : t
          ),
        }))
      );
      console.error(err);
    }
  };

  return {
    projects,
    isLoading,
    error,
    refresh: loadProjects,
    toggleTask,
  };
}
