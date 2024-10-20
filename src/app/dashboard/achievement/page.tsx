"use client"
import { Flex, Image, Text } from '@chakra-ui/react';
import { useCounterStore } from '../../../../counterStoreProvider';

export default function Achievement() {
    const { user } = useCounterStore((state) => state)

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
                <Flex style={{ flexDirection: 'column', alignItems: 'center', maxWidth: '30%', textAlign: 'center' }}>
                <Flex style={{ width: 100, height: 100, borderColor: "white", borderWidth: "4px", borderRadius: 90, alignItems: 'center', justifyContent: 'center', backgroundImage: "url('../assets/level1.png')" }}>
                    </Flex>
                    <Text>Level 1</Text>
                    <Text>Daily Crusher(10 tasks)</Text>
                </Flex>
                <Flex style={{ flexDirection: 'column', alignItems: 'center', maxWidth: '30%', textAlign: 'center' }}>
                    <Flex style={{ width: 100, height: 100, borderColor: "white", borderWidth: "4px", borderRadius: 90, alignItems: 'center', justifyContent: 'center', backgroundImage: "url('../assets/level2.png')" }}>
                    </Flex>
                    <Text>Level 2</Text>
                    <Text>Daily Crusher(15 tasks)</Text>
                </Flex>
                <Flex style={{ flexDirection: 'column', alignItems: 'center', maxWidth: '30%', textAlign: 'center' }}>
                    <Flex style={{ width: 100, height: 100, borderColor: "white", borderWidth: "4px", borderRadius: 90, alignItems: 'center', justifyContent: 'center' }}>
                        <Image src='../assets/svgs/padlock.svg' />
                    </Flex>
                    <Text>Level 3</Text>
                    <Text>Task Master(20 tasks)</Text>
                </Flex>
                <Flex style={{ flexDirection: 'column', alignItems: 'center', maxWidth: '30%', textAlign: 'center' }}>
                    <Flex style={{ width: 100, height: 100, borderColor: "white", borderWidth: "4px", borderRadius: 90, alignItems: 'center', justifyContent: 'center' }}>
                        <Image src='../assets/svgs/padlock.svg' />
                    </Flex>
                    <Text>Level 4</Text>
                    <Text>Ultimate Performer(25 tasks)</Text>
                </Flex>
                <Flex style={{ flexDirection: 'column', alignItems: 'center', maxWidth: '30%', textAlign: 'center' }}>
                    <Flex style={{ width: 100, height: 100, borderColor: "white", borderWidth: "4px", borderRadius: 90, alignItems: 'center', justifyContent: 'center' }}>
                        <Image src='../assets/svgs/padlock.svg' />
                    </Flex>
                    <Text>Level 5</Text>
                    <Text>Elite Achiever(30 tasks)</Text>
                </Flex>
                <Flex style={{ flexDirection: 'column', alignItems: 'center', maxWidth: '30%', textAlign: 'center' }}>
                    <Flex style={{ width: 100, height: 100, borderColor: "white", borderWidth: "4px", borderRadius: 90, alignItems: 'center', justifyContent: 'center' }}>
                        <Image src='../assets/svgs/padlock.svg' />
                    </Flex>
                    <Text>Level 6</Text>
                    <Text>Limitless(40 tasks)</Text>
                </Flex>
            </Flex>
        </>
    )
}
