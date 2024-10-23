'use client';
import { Button, Flex, Image, Text } from '@chakra-ui/react';
import { useTonConnectUI } from '@tonconnect/ui-react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { Sheet } from 'react-modal-sheet';
import { useCounterStore } from '../../../counterStoreProvider';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    const router = useRouter()
    const [snap, setSnap] = useState(1)
    const [tonConnectUI, setOptions] = useTonConnectUI()
    const { setUser, user } = useCounterStore((state) => state)
    const searchParams = useSearchParams()
    const userId = searchParams.get('user_id')

    useEffect(() => {
        const requestOptions: RequestInit = {
            method: "GET",
            redirect: "follow"
        };

        fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/account/?user_id=${userId}`, requestOptions)
            .then((response) => response.json())
            .then((result) => {
                setUser(result)
                !result.joined_tg && setSnap(0)
            })
            .catch((error) => console.error(error));
    }, [])


    const joinTelegram = () => {
        fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/account/join_tg/?user_id=${userId}`)
        .then((response) => response.json())
        .then((result) => console.log(result))
        .catch((error) => console.error(error));
        window.location.href = "https://t.me/lifeonton_community";  // Redirect to the telegram link
    }

    return (
        <>
            <Flex flexDir={"column"} style={{ flex: 1, position: 'relative' }}>
                <Flex style={{ justifyContent: 'space-between', alignItems: 'center', padding: "16px 0" }}>
                    <Flex style={{ alignItems: 'center', gap: 8 }}>
                        <Flex bg='black' style={{ width: 40, height: 40, borderRadius: 30, alignItems: 'center', justifyContent: 'center' }}>
                            <Text>{user?.tg_username}</Text>
                        </Flex>
                        {/* <Flex bg='black.200' style={{ borderRadius: 30, padding: "0 16px", gap: 8, alignItems: 'center', justifyContent: 'center' }}>
                        <Image src='../assets/svgs/fire.svg' />
                        <Text>{user?.referral_count} day</Text>
                    </Flex> */}
                    </Flex>
                    <Flex>
                        <Button onClick={() => tonConnectUI.openModal()} size='md' leftIcon={<Image src='../assets/svgs/wallet.svg' />}>Connect Wallet</Button>
                    </Flex>
                </Flex>
                <Flex style={{ justifyContent: 'space-between', alignItems: 'center', padding: "16px 0" }}>
                    <Flex bg='black.200' style={{ borderRadius: 30, padding: "0 16px", gap: 8, alignItems: 'center', justifyContent: 'center' }}>
                        <Image src='../assets/svgs/medal.svg' />
                        <Link href={`/dashboard/achievement?user_id=${userId}`} style={{ color: 'white' }}>Achievements</Link>
                    </Flex>
                    <Flex bg='black.200' style={{ borderRadius: 30, padding: "0 16px", gap: 8, alignItems: 'center', justifyContent: 'center' }}>
                        <Image src='../assets/svgs/ticket.svg' />
                        <Text>Events</Text>
                    </Flex>
                </Flex>
                <Flex flexDir='column' style={{ paddingBottom: "150px" }}>{children}</Flex>
                <Flex bg='purple.100' style={{ flex: 1, position: 'fixed', bottom: 0, left: 0, zIndex: 9999, width: '100%', height: 100, justifyContent: 'center', alignItems: 'center' }}>
                    <Flex bg='purple.400' style={{ padding: "8px 40px", justifyContent: 'space-between', borderRadius: 60, width: '80%' }}>
                        <Button onClick={() => router.push('/dashboard')} variant='clear' style={{ padding: 0 }}><Image src="../assets/svgs/home.svg" style={{ height: 20 }} /></Button>
                        <Button onClick={() => router.push('/dashboard/calender')} variant='clear' style={{ padding: 0 }}><Image src="../assets/svgs/calender.svg" style={{ height: 20 }} /></Button>
                        <Button onClick={() => router.push('/dashboard/cart')} variant='clear' style={{ padding: 0 }}><Image src="../assets/svgs/cart.svg" style={{ height: 20 }} /></Button>
                        <Button onClick={() => router.push('/dashboard/withdraw')} variant='clear' style={{ padding: 0 }}><Image src="../assets/svgs/dollar.svg" style={{ height: 20 }} /></Button>
                    </Flex>
                </Flex>
            </Flex>

            <Sheet isOpen={true} onClose={() => console.log("on close")}  // Set the sheet to close when the user clicks outside
                snapPoints={[400, 0]}
                initialSnap={snap}
            >
                <Sheet.Container style={{ backgroundColor: '#0F021D' }}>
                    <Sheet.Header />
                    <Sheet.Content style={{ textAlign: 'center' }}>
                        <Flex style={{ justifyContent: 'center' }}>
                            <Image src='./assets/svgs/telegram.svg' style={{ width: '100px' }} />
                        </Flex>
                        <Text fontWeight={600} fontSize='2xl'>Join our telegram</Text>
                        <Text style={{ marginTop: '16px', marginBottom: '16px' }}>Join our telegram channel  to begin your LIFE tasks</Text>
                        <Button onClick={joinTelegram}>Join</Button>
                    </Sheet.Content>
                </Sheet.Container>
                <Sheet.Backdrop />
            </Sheet>
        </>
    )
}
