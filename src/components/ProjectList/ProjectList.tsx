import { Flex } from "@mantine/core";
import { Project } from "../Project/Project";
import { useProjects } from "../../hooks/useProjects";

export const ProjectList = () => {
    const { projects, isLoading, error, refresh, toggleTask } = useProjects();
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    return (
        <Flex>
            {projects.map((project) => (
                <Project key={project.id} project={project} onToggleTask={toggleTask} />
            ))}
        </Flex>
    )
}