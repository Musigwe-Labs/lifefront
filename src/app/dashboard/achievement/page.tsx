"use client"
import { Button, Flex, Image, Text } from '@chakra-ui/react';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Sheet } from 'react-modal-sheet';
import { useCounterStore } from '../../../../counterStoreProvider';

export default function Achievement() {
    const { user } = useCounterStore((state) => state)
    const [snap, setSnap] = useState(1)
    const searchParams = useSearchParams()
    const userId = searchParams.get('user_id')
    const [levels, setLevels] = useState<any>()
    const [level, setLevel] = useState()

    useEffect(() => {
        const requestOptions = {
            method: "GET",
            redirect: "follow"
        };

        fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/account/user-levels/?user_id=${userId}`, requestOptions)
            .then((response) => response.json())
            .then((result) => setLevels(result))
            .catch((error) => console.error(error));
    }, [])

    const handleUpgrade = (level) => {
        const requestOptions = {
            method: "GET",
            redirect: "follow"
        };

        fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/account/user-upgrade-level-stars/?level_id=${level.level_id}`, requestOptions)
            .then((response) => response.json())
            .then((result) => {
                setLevel({ ...level, ...result })
                setSnap(0)
            })
            .catch((error) => console.error(error));
    }

    return (
        <>
            <Flex>
                <Flex style={{ flexDirection: 'column', alignItems: 'center', margin: "0 auto" }}>
                    <Flex style={{ width: 100, height: 100, borderColor: "white", borderWidth: "4px", borderRadius: 90, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ color: 'white', fontSize: 50 }}>M</Text>
                    </Flex>
                    <Text style={{ fontSize: "18px", fontWeight: 700 }}>2/10</Text>
                    <Text>Levels</Text>
                </Flex>
            </Flex>
            <Flex style={{ flexWrap: 'wrap', gap: 24, marginTop: 24 }}>
                {
                    levels?.other_levels && levels?.other_levels?.map((level, index) => (
                        <Flex key={index} style={{ flexDirection: 'column', alignItems: 'center', maxWidth: '30%', textAlign: 'center' }} onClick={() => handleUpgrade(level)}>
                            <Flex style={{ width: 100, height: 100, borderColor: "white", borderWidth: "4px", borderRadius: 90, alignItems: 'center', justifyContent: 'center', background: level.level_id !== levels.current_level.level_id ? "black" : "url('../assets/level2.png')" }}>
                                {level.level_id !== levels.current_level.level_id && <Image src='../assets/svgs/padlock.svg' />}
                            </Flex>
                            <Text>{`Level ${level.level_id}`}</Text>
                            <Text>{`${level.level_name}(${level.daily_task_limit} tasks)`}</Text>
                        </Flex>
                    )
                    )
                }
            </Flex>

            <Sheet isOpen={true} onClose={() => console.log("helo")}  // Set the sheet to close when the user clicks outside
                snapPoints={[400, 0]}
                initialSnap={snap}
            >
                <Sheet.Container style={{ backgroundColor: '#0F021D' }}>
                    <Sheet.Header />
                    <Sheet.Content style={{ textAlign: 'center' }}>
                        <Flex style={{ justifyContent: 'center' }}>
                            <Image src='../assets/city_sunrise.png' style={{ width: '100px' }} />
                        </Flex>
                        <Text fontWeight={600} fontSize='2xl'>{level?.level_name}</Text>
                        <Text style={{ marginTop: '16px', marginBottom: '16px' }}>{`Unlock with ${level?.STARS} stars.`}</Text>
                        <Button onClick={() => window.location.href = level?.purchase_level_link}>Upgrade</Button>
                    </Sheet.Content>
                </Sheet.Container>
                <Sheet.Backdrop />
            </Sheet>
        </>
    )
}
