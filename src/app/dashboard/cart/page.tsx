"use client"
import { Box, Button, Flex, Image, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

export default function Dashboard() {
    const [charities, setCharities] = useState<any[]>()
    
    useEffect(() => {
          fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/account/charities`)
            .then((response) => response.json())
            .then((result) => setCharities(result))
            .catch((error) => console.error(error));
    }, [])
    
    return (
        <>
            {/* <Flex justifyContent='center' style={{ flex: 1, marginTop: 50, marginBottom: 34 }}>
                <Flex style={{ position: 'relative', width: 240, height: 222, alignItems: 'center', justifyContent: 'center' }}>
                    <Image src='../assets/svgs/dashboard.svg' style={{ position: 'absolute', zIndex: 1, height: '100%', width: '100%' }} />
                    <Flex flexDir='column' style={{ zIndex: 3, width: "80%", alignItems: 'center' }}>
                        <Flex style={{ gap: 4 }}>
                            <Image src='../assets/svgs/coin.svg' />
                            <Text fontSize='sm'>Wallet Balance</Text>
                        </Flex>
                        <Text fontSize='4xl' style={{ textAlign: 'center', lineHeight: '50px', fontWeight: 700 }}>1,200</Text>
                        <Text fontSize='xl' style={{ textAlign: 'center', lineHeight: '24px', width: '80%' }}>Your LIFE is growing!</Text>
                    </Flex>
                </Flex>
            </Flex> */}
            <Flex flexDir='column' alignItems='center' marginTop={10}>
                <Image src='../assets/shoppingTrolley.png' style={{ width: 48, height: 48 }} />
                <Text fontWeight={600} fontSize='2xl'>Life Charity</Text>
                <Text fontSize='md' style={{ textAlign: 'center', width: "80%" }}>Shop, shop, shop and spend your lifecoin in our marketplace.</Text>
            </Flex>

            <Flex style={{flexWrap: 'wrap', justifyContent: 'space-between'}}>
                {charities?.map((charity) => <Flex bgSize='cover' bgImage="url('../assets/donate1.png')" style={{ flexDirection: 'column', width: '49%', padding: "100px 16px 16px 16px", marginTop: '24px', borderRadius: 16 }} >
                    <Text fontWeight={600} fontSize='md' lineHeight="20px">{charity.name}</Text>
                    <Text fontSize='xs' color='#FFF176' >Total Amount Donated: {charity.amount_donated}</Text>
                    <Button size='sm'>Donate now</Button>
                </Flex>)}
            </Flex>
        </>
    )
}
