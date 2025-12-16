import type { ProjectProps } from "../../types/project.types";
import { Flex, Group, Title, Text } from "@mantine/core";
import { Task } from "../Task/Task";

export const Project = ({ project, onToggleTask }: ProjectProps) => {
    return (
        <Flex bg="white" p="md">
            <Group justify="space-between">
                <Title order={3}>{project.title}</Title>
                <Text size="sm">{project.description}</Text>
                <Text size="xs">{project.createdAt.toLocaleDateString()}</Text>
            </Group>
            <Flex>
                {project.tasks.map((task) => (
                    <Task task={task} onToggleTask={onToggleTask} />
                ))}
            </Flex>
        </Flex>
    )
}
