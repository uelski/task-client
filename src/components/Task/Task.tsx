import { Box, Text, Title, Checkbox, Group, ColorSwatch, Flex } from "@mantine/core";
import type { TaskProps } from "../../types/task.types";

export const Task = ({ task, onToggleTask }: TaskProps) => {

    return (
        <Flex bg="white" p="md">
            <Group justify="space-between">
                <Title order={3}>{task.title}</Title>
                <Checkbox checked={task.completed} onChange={() => onToggleTask(task.id, task.completed)} />
            </Group>
            <Text size="sm">{task.description}</Text>
            <Text size="xs">{task.createdAt.toLocaleDateString()}</Text>
            <ColorSwatch color={task.priority === 'low' ? 'green' : task.priority === 'medium' ? 'yellow' : 'red'} />
        </Flex>
    )
}