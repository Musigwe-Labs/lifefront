'use client';
import { Flex, Image, Text } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';

export default function Splash() {
    const router = useRouter()
    setTimeout(() => {
        router.push('/onboarding');
        console.log('redirected');
    }, 1000);

    return (
        <Flex flex={1} flexDir={'column'} alignItems={'center'} justifyContent={'center'}>
            <Image src="./assets/logo.png" alt='logo' />
            <Text fontSize={'xl'} fontWeight={600}>Your Life, Your Coin</Text>
        </Flex>
    )
}
