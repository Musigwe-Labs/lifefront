'use client';
import { Box, Button, Flex, Image, Text } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

interface Task {
    id: number;
    name: string;
}

export default function Life() {
    const router = useRouter();
    const [tasks, setTasks] = useState<Task[]>([]);
    const [selectedTasks, setSelectedTasks] = useState<number[]>([]);

    useEffect(() => {
        const requestOptions: RequestInit = {
            method: "GET",
            redirect: "follow"
        };

        fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/account/all-tasks/`, requestOptions)
            .then((response) => response.json())
            .then((result) => setTasks(result))
            .catch((error) => console.error(error));
    }, []);

    const handleSelectTask = (taskId: number) => {
        if (selectedTasks.includes(taskId)) {
            setSelectedTasks(selectedTasks.filter(id => id !== taskId)); // Remove task if already selected
        } else {
            setSelectedTasks([...selectedTasks, taskId]); // Add task if not selected
        }
    };

    const onFinish = () => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "activity_ids": selectedTasks
        });

        const requestOptions: RequestInit = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/account/activities/add/?user_id=1`, requestOptions)
            .then((response) => response.json())
            .then((result) => {
                console.log(result);
                toast(result.message)
                router.push('/dashboard'); // Redirect after successful submission
            })
            .catch((error) => console.error(error));
    };

    return (
        <Flex flex={1} flexDir={'column'} alignItems={'center'} justifyContent={'flex-end'} gap={8} paddingBottom={20}>
            <Flex style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Image src="../../assets/onboardingImg1.png" alt='Schedule Payment Illustration' />
                <Image src="../../assets/onboardingThumbnail1.png" alt='Schedule jd Illustration' style={{ position: "absolute" }} />
            </Flex>
            <Box>
                <Text textAlign={{ md: 'initial', base: 'center' }} fontWeight={800}>Select your Life Tasks</Text>
                <Text textAlign={{ md: 'initial', base: 'center' }} fontWeight={400}>Select a list of activities for the day to earn points.</Text>
                <Flex style={{ flexWrap: 'wrap', justifyContent: 'space-between', gap: 8, marginTop: 24 }}>
                    {
                        tasks.map((task) => (
                            <Button
                                style={{ width: "48%", backgroundColor: selectedTasks.includes(task.id) ? 'green' : '' }}
                                key={task.id}
                                onClick={() => handleSelectTask(task.id)}
                            >
                                {task.name}
                            </Button>
                        ))
                    }
                </Flex>
                <Button style={{ marginTop: 24 }} onClick={onFinish}>Finish</Button>
            </Box>
        </Flex>
    );
}
