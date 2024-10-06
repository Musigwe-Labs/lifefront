"use client"
import { Button, Flex, Image, Text } from '@chakra-ui/react';
import { useCounterStore } from '../../../counterStoreProvider';
import { formatBalance } from '@/constants/utils/formatBalance';
import { useState } from 'react';

export default function Dashboard() {
    const { user } = useCounterStore((state) => state);
    const [claimStatus, setClaimStatus] = useState<string | null>(null); // Track claim status (success, error, or null)

    const onClaim = () => {
        const requestOptions: RequestInit = {
            method: "POST",
            redirect: "follow"
        };
        
        fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/account/join/?user_id=${user?.id}`, requestOptions)  // Use dynamic user ID
            .then((response) => response.json())
            .then((result) => {
                console.log(result);
                setClaimStatus('success'); // Set status as success on successful claim
            })
            .catch((error) => {
                console.error(error);
                setClaimStatus('error'); // Set status as error on failure
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
                    <Text color='#A0A0A0AA' fontSize='xs'>Tomorrow 6:00am</Text>
                </Flex>
                <Text fontWeight={600} fontSize='2xl'>Rise Up Challenge</Text>
                <Text fontSize='md' style={{ textAlign: 'center' }}>Be amongst the first 1,000 lifers to wake up at 6am and claim 500,000 lifecion.</Text>
                <Text color='red' fontSize='xs'>Challenge lasts for 3 minutes only</Text>
                <Button style={{ borderRadius: 8 }} onClick={onClaim}>Claim</Button>
            </Flex>
            
            {claimStatus === 'success' && <Text color="green" fontSize="md">Claim successful!</Text>}
            {claimStatus === 'error' && <Text color="red" fontSize="md">Claim failed. Please try again later.</Text>}
        </>
    )
}
