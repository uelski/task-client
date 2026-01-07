import { Flex, Title, TextInput, Button } from "@mantine/core";
import { useState } from "react";
import { addProject } from "../../api/projects";
import { useProjects } from "../../hooks/useProjects";

type Errors = {
    projectName?: string;
    projectDescription?: string;
}

export const AddProject = () => {
    const { refresh } = useProjects();
    const [projectName, setProjectName] = useState('');
    const [projectDescription, setProjectDescription] = useState('');
    const [errors, setErrors] = useState<Errors>({});

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const errors: Errors = {};
        if (!projectName) {
            errors.projectName = 'Project name is required';
        }
        if (!projectDescription) {
            errors.projectDescription = 'Project description is required';
        }
        setErrors(errors);
        if (Object.keys(errors).length > 0) {
            return;
        }
        try {
            await addProject({ title: projectName, description: projectDescription });
            refresh();
        } catch (error) {
            console.error(error);
        }
    }
    return (
        <Flex direction="column" py={'lg'}>
            <Title c="white" order={3} py={'lg'}>Add Project</Title>
            <form onSubmit={handleSubmit}>
                <Flex direction="column" gap="md">
                    <TextInput placeholder="Project Name" name="projectName" value={projectName} onChange={(e) => setProjectName(e.target.value)} error={errors.projectName} />
                    <TextInput placeholder="Project Description" name="projectDescription" value={projectDescription} onChange={(e) => setProjectDescription(e.target.value)} error={errors.projectDescription} />
                    <Button bg={'#0b599d'} type="submit">Add Project</Button>
                </Flex>
            </form>
        </Flex>
    )
}