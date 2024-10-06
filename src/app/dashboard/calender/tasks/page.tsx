"use client"
import { convertTimeFormat } from '@/constants/utils/convertTimeFormat';
import { Button, Flex, Image, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

export default function Tasks() {
    const [tasks, setTasks] = useState<any[]>([]);
    const [remainingTimes, setRemainingTimes] = useState<{ [key: string]: number }>({});

    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/account/all-tasks/`)
            .then((response) => response.json())
            .then((result) => setTasks(result))
            .catch((error) => console.error(error));
    }, []);

    const startCountdown = (taskId: string, timeStr: string) => {
        const [hours, minutes, seconds] = timeStr.split(':').map(Number);
        let totalSeconds = hours * 3600 + minutes * 60 + seconds;

        setRemainingTimes((prev) => ({ ...prev, [taskId]: totalSeconds }));

        const interval = setInterval(() => {
            setRemainingTimes((prev) => {
                const newTime = prev[taskId] - 1;
                if (newTime <= 0) {
                    clearInterval(interval);
                    claimReward(); // Automatically call the reward function
                    return { ...prev, [taskId]: 0 };
                }
                return { ...prev, [taskId]: newTime };
            });
        }, 1000);
    };

    const formatCountdown = (totalSeconds: number) => {
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;
        return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };

    const claimReward = () => {
        console.log("claim reward");
        // You can add additional logic here, such as API calls to claim the reward
    };

    return (
        <>
            <Flex justifyContent='center' style={{ flex: 1, flexDirection: 'column', alignItems: 'center', marginTop: 50, marginBottom: 34 }}>
                <Image src='../../assets/coin.png' style={{ width: 188 }} />
                <Text fontSize='xl' style={{ fontWeight: 700, marginTop: 16 }}>Tasks for you</Text>
                <Text fontSize='sm' style={{}}>Get rewards for completing tasks.</Text>
            </Flex>
            <Text fontSize='xl' style={{ fontWeight: 700 }}>All tasks</Text>
            {tasks?.map((task) => (
                <Flex key={task.id} flexDir='row' style={{ borderRadius: 16, border: '1px solid #FFFFFF3D', padding: "16px 24px", marginTop: 16, alignItems: 'center', background: '#C879FF14' }}>
                    <Flex flexDir='column' style={{ width: '70%' }}>
                        <Text fontWeight={600} fontSize='xl'>{task.name}</Text>
                        <Flex style={{ gap: 4 }}>
                            <Image src='../../assets/svgs/coinn.svg' />
                            <Text fontSize='sm' fontWeight={600} color="#ECF27D">{task.amount_allocated}</Text>
                            <Image src='../../assets/svgs/time.svg' />
                            <Text fontSize='sm'>
                                {convertTimeFormat(task.time_allocated)}
                            </Text>
                        </Flex>
                    </Flex>
                    <Button 
                        size='xs' 
                        style={{ width: '30%', height: '100%' }} 
                        onClick={remainingTimes[task.id] === 0 ? claimReward : () => startCountdown(task.id, task.time_allocated)}
                    >
                        {remainingTimes[task.id] !== undefined ? (remainingTimes[task.id] === 0 ? "Claim" : formatCountdown(remainingTimes[task.id])) : "Go"}
                    </Button>
                </Flex>
            ))}
            <Text fontSize='xl' style={{ fontWeight: 700, marginTop: 16 }}>Watch an ad and earn 2500 coins</Text>
            <Flex flexDir='row' style={{ borderRadius: 16, border: '1px solid #FFFFFF3D', padding: "16px 24px", marginTop: 16, alignItems: 'center', justifyContent: 'space-between', background: '#C879FF14' }}>
                <Flex gap={4}>
                    <Image src='../../assets/svgs/tv.svg' />
                    <Flex flexDir='column' style={{}}>
                        <Text fontWeight={600} fontSize='xl'>Watch an add today</Text>
                        <Text fontSize='sm'>Watch an ad and earn. It’s that simple</Text>
                    </Flex>
                </Flex>
                <Flex style={{ gap: 4 }}>
                    <Image src='../../assets/svgs/coinn.svg' />
                    <Text fontSize='sm' fontWeight={600} color="#ECF27D">2500</Text>
                </Flex>
            </Flex>
            <Text fontSize='xl' style={{ fontWeight: 700, marginTop: 16 }}>Get more life coins</Text>
            <Flex flexDir='row' style={{ borderRadius: 16, border: '1px solid #FFFFFF3D', padding: "16px 24px", marginTop: 16, alignItems: 'center', justifyContent: 'space-between', background: '#C879FF14' }}>
                <Flex gap={4}>
                    <Image src='../../assets/svgs/tv.svg' />
                    <Flex flexDir='column' style={{}}>
                        <Text fontWeight={600} fontSize='xl'>Get more life coins</Text>
                        <Text fontSize='sm'>Get more life coins for 5 stars</Text>
                    </Flex>
                </Flex>
                <Flex style={{ gap: 4 }}>
                    <Image src='../../assets/svgs/coinn.svg' />
                    <Text fontSize='sm' fontWeight={600} color="#ECF27D">2500</Text>
                </Flex>
            </Flex>
        </>
    );
}
