import { Box, Button, Flex, Image, Text } from '@chakra-ui/react';

export default function Dashboard() {
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
                        <Text fontSize='4xl' style={{ textAlign: 'center', lineHeight: '50px', fontWeight: 700 }}>1,200</Text>
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
                <Text fontSize='md' style={{ textAlign: 'center' }}>Be amongst the first 1,000 lifers to wake up at 6am and  claim 500,000 lifecion.</Text>
                <Text color='red' fontSize='xs'>Challenge last for 3 minutes only</Text>
                <Button style={{ borderRadius: 8 }}>Claim</Button>
            </Flex>
        </>
    )
}
