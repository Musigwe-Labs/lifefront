"use client"
import { Button, Flex, Image, Text } from '@chakra-ui/react';
import { useCounterStore } from '../../../../counterStoreProvider';
import { formatBalance } from '@/constants/utils/formatBalance';

export default function Dashboard() {
    const { user } = useCounterStore((state) => state)
    return (
        <>
            <Flex justifyContent='center' style={{ flex: 1, marginTop: 50, marginBottom: 34 }}>
                <Flex style={{ position: 'relative', width: 240, height: 222, alignItems: 'center', justifyContent: 'center' }}>
                    <Image src='../assets/svgs/dashboard.svg' style={{ position: 'absolute', zIndex: 1, height: '100%', width: '100%' }} />
                    <Flex flexDir='column' style={{ zIndex: 3, width: "80%", alignItems: 'center' }}>
                        <Flex style={{ gap: 4 }}>
                            <Image src='../assets/svgs/coin.svg' />
                            <Text fontSize='sm'>Wallet Balance</Text>
                        </Flex>
                        <Text fontSize='4xl' style={{ textAlign: 'center', lineHeight: '50px', fontWeight: 700 }}>{formatBalance(user?.total_balance || 0)}</Text>
                        <Text fontSize='xl' style={{ textAlign: 'center', lineHeight: '24px', width: '80%' }}>Your LIFE is growing!</Text>
                    </Flex>
                </Flex>
            </Flex>
            <Flex flexDir='row' style={{ borderRadius: 16, border: '1px solid #FFFFFF3D', padding: "16px 24px", gap: 8, alignItems: 'center', background: 'linear-gradient(97.25deg, #B065FB 0.33%, rgba(26, 26, 26, 0.08) 69.95%)' }}>
                <Flex flexDir='column' gap={1}>
                    <Text fontWeight={600} fontSize='2xl'>Tasks for you</Text>
                    <Text fontSize='md' >Complete these objectives and achieve coins</Text>
                    <Button onClick={() => location.href = "/dashboard/calender/tasks"} size='md' color='purple.100' style={{ borderRadius: 32, width: '80%', background: 'white' }}>View tasks</Button>
                </Flex>
                <Image src='../assets/padlock.png' />
            </Flex>
            <Flex flexDir='row' style={{ marginTop: 24, borderRadius: 16, border: '1px solid #FFFFFF3D', padding: "16px 24px", gap: 8, alignItems: 'center', background: 'linear-gradient(97.25deg, #ED2400 0.33%, rgba(26, 26, 26, 0.08) 69.95%)' }}>
                <Flex flexDir='column' gap={1}>
                    <Text fontWeight={600} fontSize='2xl'>Live your life</Text>
                    <Text fontSize='md' >Complete these objectives and achieve coins</Text>
                    <Button size='md' color='purple.100' style={{ borderRadius: 32, width: '80%', background: 'white' }}>View tasks</Button>
                </Flex>
                <Image src='../assets/padlock.png' />
            </Flex>
        </>
    )
}
