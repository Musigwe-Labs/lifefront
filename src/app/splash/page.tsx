'use client';
import { Flex, Image, Text } from '@chakra-ui/react';
import { useRouter, useSearchParams } from 'next/navigation';

export default function Splash() {
    const router = useRouter()
    const searchParams = useSearchParams()
    const userId = searchParams.get('user_id')
    setTimeout(() => {
        router.push('/onboarding?user_id=' + userId)
        console.log('redirected');
    }, 1000);

    return (
        <Flex flex={1} flexDir={'column'} alignItems={'center'} justifyContent={'center'}>
            <Image src="./assets/logo.png" alt='logo' />
            <Text fontSize={'xl'} fontWeight={600}>Your Life, Your Coin</Text>
        </Flex>
    )
}
