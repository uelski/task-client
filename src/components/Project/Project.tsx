import type { ProjectProps } from "../../types/project.types";
import { Flex, Title, Text } from "@mantine/core";
import { Task } from "../Task/Task";
import { AddTask } from "../AddTask/AddTask";

export const Project = ({ project, onToggleTask }: ProjectProps) => {
    return (
        <Flex bg="black" p="md" direction="column" gap="md" style={{ border: '1px solid gray', borderRadius: '10px' }}>
            <Flex direction="column" gap="md" justify="space-between">
                <Title order={3} c="white">{project.title}</Title>
                <Text size="sm" c="white">{project.description}</Text>
                <AddTask />
            </Flex>
            <Flex direction="column" gap="md">
                {project.tasks.map((task) => (
                    <Task key={task.id} task={task} onToggleTask={onToggleTask} />
                ))}
            </Flex>
        </Flex>
    )
}
