"use client"
import { Button, Flex, Image, Text } from '@chakra-ui/react';
import { useCounterStore } from '../../../counterStoreProvider';
import { formatBalance } from '@/constants/utils/formatBalance';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { format } from 'date-fns';  // For formatting the date/time

export default function Dashboard() {
    const { user } = useCounterStore((state) => state);
    const [challengeStartTime, setChallengeStartTime] = useState<string>(); // Default value

    const onClaim = () => {
        const requestOptions: RequestInit = {
            method: "POST",
            redirect: "follow"
        };

        fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/account/join/?user_id=${1}`, requestOptions)  // Use dynamic user ID
            .then((response) => response.json())
            .then((result) => {
                result.error ? toast.error(result.error) : toast.success(result.message);
                // Convert the start_time to local time and format it
                const startTime = new Date(result.start_time);
                const formattedTime = format(startTime, 'PPPPp');  // Customize format as needed (e.g., "Tomorrow h:mma")
                setChallengeStartTime(formattedTime);  // Update state with formatted time
            })
            .catch((error) => {
                toast.error(error.message);
            });
    };

    return (
        <>
            <Flex justifyContent='center' style={{ flex: 1, marginTop: 50, marginBottom: 34 }}>
                <Flex style={{ position: 'relative', width: 240, height: 222, alignItems: 'center', justifyContent: 'center' }}>
                    <Image src='./assets/svgs/dashboard.svg' style={{ position: 'absolute', zIndex: 1, height: '100%', width: '100%' }} />
                    <Flex flexDir='column' style={{ zIndex: 3, width: "80%", alignItems: 'center' }}>
                        <Flex style={{ gap: 4 }}>
                            <Image src='./assets/svgs/coin.svg' />
                            <Text fontSize='sm'>Wallet Balance</Text>
                        </Flex>
                        <Text fontSize='4xl' style={{ textAlign: 'center', lineHeight: '50px', fontWeight: 700 }}>{formatBalance(user?.total_balance || 0)}</Text>
                        <Text fontSize='xl' style={{ textAlign: 'center', lineHeight: '24px', width: '80%' }}>Your LIFE is growing!</Text>
                    </Flex>
                </Flex>
            </Flex>
            <Flex flexDir='column' bg='purple.500' style={{ borderRadius: 16, padding: "16px 24px", gap: 8, alignItems: 'center' }}>
                <Flex gap={1}>
                    <Image src='./assets/svgs/time.svg' />
                    <Text color='#A0A0A0AA' fontSize='xs'>{challengeStartTime}</Text>
                </Flex>
                <Text fontWeight={600} fontSize='2xl'>Rise Up Challenge</Text>
                <Text fontSize='md' style={{ textAlign: 'center' }}>Be amongst the first 1,000 lifers to wake up at 6am and claim 500,000 lifecion.</Text>
                <Text color='red' fontSize='xs'>Challenge lasts for 3 minutes only</Text>
                <Button style={{ borderRadius: 8 }} onClick={onClaim}>Claim</Button>
            </Flex>
        </>
    )
}
