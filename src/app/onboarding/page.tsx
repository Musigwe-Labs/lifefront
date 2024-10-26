'use client';
import { Box, Button, Flex, Image, Text } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Onboarding() {
    const router = useRouter()
    const [userId, setUserId] = useState("")

    useEffect(() => {
        if(typeof window !== 'undefined') setUserId(localStorage.getItem('user_id') as string)
      }, [])

    return (
        <Flex flex={1} flexDir={'column'} alignItems={'center'} justifyContent={'flex-end'} gap={8} paddingBottom={20}>
            <Flex style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Image src="./assets/onboardingImg1.png" alt='Schedule Payment Illustration' />
                <Image src="./assets/onboardingThumbnail1.png" alt='Schedule jd Illustration' style={{ position: "absolute" }} />
            </Flex>
            <Flex gap={1}>
                <Box bg={'white'} style={{ width: 23, height: 10, borderRadius: 8 }}></Box>
                <Box bg={'purple.300'} style={{ width: 10, height: 10, borderRadius: 8 }}></Box>
                <Box bg={'purple.300'} style={{ width: 10, height: 10, borderRadius: 8 }}></Box>
                <Box bg={'purple.300'} style={{ width: 10, height: 10, borderRadius: 8 }}></Box>
            </Flex>
            <Text textAlign={{ md: 'initial', base: 'center' }} fontWeight={400} >Turn Your Daily Routine into Rewards!</Text>
            <Button onClick={() => router.push('/dashboard')}>Get Started</Button>
        </Flex>
    )
}
