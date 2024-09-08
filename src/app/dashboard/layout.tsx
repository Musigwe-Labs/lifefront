'use client';
import { Box, Button, Flex, Image, Text } from '@chakra-ui/react'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    const router = useRouter()
    return (
        <Flex flexDir={"column"} style={{ flex: 1, position: 'relative' }}>
            <Flex style={{ justifyContent: 'space-between', alignItems: 'center', padding: "16px 0" }}>
                <Flex style={{ alignItems: 'center', gap: 8 }}>
                    <Flex bg='black' style={{ width: 40, height: 40, borderRadius: 30, alignItems: 'center', justifyContent: 'center' }}>
                        <Text>M</Text>
                    </Flex>
                    <Flex bg='black.200' style={{ borderRadius: 30, padding: "0 16px", gap: 8, alignItems: 'center', justifyContent: 'center' }}>
                        <Image src='./assets/svgs/fire.svg' />
                        <Text>1 day</Text>
                    </Flex>
                </Flex>
                <Flex>
                    <Button size='md' leftIcon={<Image src='./assets/svgs/wallet.svg' />}>Connect Wallet</Button>
                </Flex>
            </Flex>
            <Flex style={{ justifyContent: 'space-between', alignItems: 'center', padding: "16px 0" }}>
                <Flex bg='black.200' style={{ borderRadius: 30, padding: "0 16px", gap: 8, alignItems: 'center', justifyContent: 'center' }}>
                    <Image src='./assets/svgs/medal.svg' />
                    <Text>Achievements</Text>
                </Flex>
                <Flex bg='black.200' style={{ borderRadius: 30, padding: "0 16px", gap: 8, alignItems: 'center', justifyContent: 'center' }}>
                    <Image src='./assets/svgs/ticket.svg' />
                    <Text>Events</Text>
                </Flex>
            </Flex>
            <Flex flexDir='column'>{children}</Flex>
            <Flex bg='purple.100' style={{ flex: 1, position: 'fixed', bottom: 0, left: 0, zIndex: 9999, width: '100%', height: 100, justifyContent: 'center', alignItems: 'center' }}>
                <Flex bg='purple.400' style={{ padding: "8px 40px", justifyContent: 'space-between', borderRadius: 60, width: '80%' }}>
                    <Button onClick={() => router.push('/dashboard')} variant='clear' style={{padding: 0}}><Image src="./assets/svgs/home.svg" style={{ height: 20 }} /></Button>
                    <Button onClick={() => router.push('/dashboard/calender')} variant='clear' style={{padding: 0}}><Image src="./assets/svgs/calender.svg" style={{ height: 20 }} /></Button>
                    <Button onClick={() => router.push('/dashboard/calender')} variant='clear' style={{padding: 0}}><Image src="./assets/svgs/cart.svg" style={{ height: 20 }} /></Button>
                    <Button onClick={() => router.push('/dashboard/users')} variant='clear' style={{padding: 0}}><Image src="./assets/svgs/users.svg" style={{ height: 20 }} /></Button>
                </Flex>
            </Flex>
        </Flex>
    )
}
