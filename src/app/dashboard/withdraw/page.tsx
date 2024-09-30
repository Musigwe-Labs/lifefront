import { Flex, Image, Text } from '@chakra-ui/react';

export default function Dashboard() {
    return (
        <>
            <Text fontWeight={600} fontSize='md'>Coin</Text>
            <Flex bgColor='#9035DE14' style={{ padding: "8px 16px", borderRadius: 8, margin: '16px 0' }}>
                <Flex alignItems='center'>
                    <Image src='../assets/logo.png' style={{width: '36px', height: '36px'}} />
                    <Text fontWeight={600} fontSize='md'>Life</Text>
                </Flex>
            </Flex>
            <Text fontWeight={600} fontSize='md'>Network</Text>
            <Flex bgColor='#9035DE14' style={{ padding: "16px", borderRadius: 8, margin: '16px 0' }}>
                <Text fontSize='sm' color='#A0A0A080'>Please choose a network</Text>
            </Flex>
            <Text fontWeight={600} fontSize='md'>Amount</Text>
            <Flex bgColor='#9035DE14' style={{ padding: "16px", borderRadius: 8, margin: '16px 0' }}>
                <Text fontSize='sm' color='#A0A0A080'>Min. Withdrawal Amount: 50</Text>
            </Flex>
        </>
    )
}
