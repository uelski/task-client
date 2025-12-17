import { Text, Title, Checkbox, Group, ColorSwatch, Flex } from "@mantine/core";
import type { TaskProps } from "../../types/task.types";

export const Task = ({ task, onToggleTask }: TaskProps) => {

    return (
        <Flex bg="black" p="md" direction="column" gap="md">
            <Group>
                <Checkbox style={{ cursor: 'pointer' }} c="white" checked={task.completed} onChange={() => onToggleTask(task.id, task.completed)} />
                <Title c="white" order={4}>{task.title}</Title>
                <ColorSwatch color={task.priority === 'low' ? '#1e631e' : task.priority === 'medium' ? '#c3c312' : '#a91c1c'} />
            </Group>
            <Text size="sm" c="white">{task.description}</Text>
        </Flex>
    )
}