import type { ProjectProps } from "../../types/project.types";
import { Flex, Group, Title, Text } from "@mantine/core";
import { Task } from "../Task/Task";

export const Project = ({ project, onToggleTask }: ProjectProps) => {
    return (
        <Flex bg="white" p="md" direction="column" gap="md">
            <Flex direction="column" gap="md" justify="space-between">
                <Title order={3}>{project.title}</Title>
                <Text size="sm">{project.description}</Text>
            </Flex>
            <Flex direction="column" gap="md">
                {project.tasks.map((task) => (
                    <Task key={task.id} task={task} onToggleTask={onToggleTask} />
                ))}
            </Flex>
        </Flex>
    )
}
