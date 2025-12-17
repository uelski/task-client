import { Flex, Title, TextInput, Button } from "@mantine/core";
import { useState } from "react";

export const AddProject = () => {
    const [projectName, setProjectName] = useState('');
    const [projectDescription, setProjectDescription] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Submit', projectName, projectDescription);
    }
    return (
        <Flex direction="column" py={'lg'}>
            <Title c="white" order={3} py={'lg'}>Add Project</Title>
            <form onSubmit={handleSubmit}>
                <Flex direction="column" gap="md">
                    <TextInput placeholder="Project Name" name="projectName" value={projectName} onChange={(e) => setProjectName(e.target.value)} />
                    <TextInput placeholder="Project Description" name="projectDescription" value={projectDescription} onChange={(e) => setProjectDescription(e.target.value)} />
                    <Button bg={'#0b599d'} type="submit">Add Project</Button>
                </Flex>
            </form>
        </Flex>
    )
}