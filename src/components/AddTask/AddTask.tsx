// title description priority
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button, TextInput, Select } from '@mantine/core';
import { useState } from 'react';

export const AddTask = () => {
    const [opened, { open, close }] = useDisclosure(false);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [priority, setPriority] = useState<'low' | 'medium' | 'high'>('low');
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Submit', title, description, priority);
        close();
        setTitle('');
        setDescription('');
        setPriority('low');
    }
    return (
        <>
            <Modal opened={opened} onClose={close} title="Add Task">
                <form onSubmit={handleSubmit}>
                    <TextInput placeholder="Title" name="title" value={title} onChange={(e) => setTitle(e.target.value)} />
                    <TextInput placeholder="Description" name="description" value={description} onChange={(e) => setDescription(e.target.value)} />
                    <Select placeholder="Priority" name="priority" value={priority} onChange={(value) => setPriority(value as 'low' | 'medium' | 'high')} data={['low', 'medium', 'high']}/>
                    <Button bg={'#0b599d'} type="submit">Add Task</Button>
                </form>
            </Modal>
            <Button bg={'#0b599d'} onClick={open}>Add Task</Button>
        </>


    )

}