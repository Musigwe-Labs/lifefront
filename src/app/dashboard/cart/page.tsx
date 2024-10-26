"use client"
import { Button, Flex, Image, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { Sheet } from 'react-modal-sheet';
import { toast } from 'react-toastify';

export default function Dashboard() {
    const [charities, setCharities] = useState<any[]>()
    const [investments, setInvestments] = useState<any[]>()
    const [investmentId, setInvestmentId] = useState(0)
    const [charityId, setCharityId] = useState(0)
    const [screen, setScreen] = useState<"investment" | "charity" | "p2p">("charity")
    const [sheetSnap, setSheetSnap] = useState(1)
    const [selectedTasks, setSelectedTasks] = useState<number>();
    const [userId, setUserId] = useState<string>()
    
    useEffect(() => {
        if(typeof window !== 'undefined') setUserId(localStorage.getItem('user_id') as string)
      }, [])

    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/account/charities`)
            .then((response) => response.json())
            .then((result) => setCharities(result))
            .catch((error) => console.error(error));

        fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/account/invests?user_id=${window.localStorage.getItem("user_id")}`)
            .then((response) => response.json())
            .then((result) => setInvestments(result))
            .catch((error) => console.error(error));
    }, [])

    const donateClick = (charity_id: number, amount: number) => {
        const requestOptions: RequestInit = {
            method: "POST",
            redirect: "follow"
        };

        fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/account/donate/?user_id=${userId}&charity_id=${charityId}&amount=${amount}`, requestOptions)
            .then((response) => response.json())
            .then((result) => toast(result.status))
            .catch((error) => toast.error(error.error));

        setSheetSnap(1)
    }

    const proceedInvestment = (investment_id: number, amount: number) => {
        const requestOptions: RequestInit = {
            method: "POST",
            redirect: "follow"
        };

        fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/account/user-invests/?user_id=${userId}&investment_id=${investment_id}&invested_amount=${amount}`, requestOptions)
            .then((response) => response.json())
            .then((result) => result.error ? toast.error(result.error) : toast(result.message))
            .catch((error) => toast.error(error.error));

        setSheetSnap(1)
    }

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

            <Flex style={{ background: '#C879FF14', borderRadius: 8, justifyContent: "space-around" }}>
                <Button onClick={() => setScreen("charity")} variant='clear' style={{ padding: '16px 24px', color: 'white' }}>Charity</Button>
                <Button onClick={() => setScreen("investment")} variant='clear' style={{ padding: '16px 24px', color: 'white' }}>Investment</Button>
                <Button onClick={() => setScreen("p2p")} variant='clear' style={{ padding: '16px 24px', color: 'white' }}>P2P</Button>
            </Flex>

            {screen === "charity" && <Flex style={{ flexWrap: 'wrap', justifyContent: 'space-between' }}>
                {charities?.map((charity, idx) => <Flex key={idx} bgSize='cover' bgImage="url('../assets/donate1.png')" style={{ flexDirection: 'column', width: '49%', padding: "100px 16px 16px 16px", marginTop: '24px', borderRadius: 16 }} >
                    <Text fontWeight={600} fontSize='md' lineHeight="20px">{charity.name}</Text>
                    <Text fontSize='xs' color='#FFF176' >Total Amount Donated: {charity.amount_donated}</Text>
                    <Button size='sm' onClick={() => {
                        setCharityId(charity.id)
                        setSheetSnap(0)
                    }}>Donate now</Button>
                </Flex>)}
            </Flex>}
            {screen === "investment" && <Flex style={{ flexWrap: 'wrap', gap: 8 }}>
                {investments?.map((investment, idx) => <Flex key={idx} style={{ flexDirection: 'column', background: '#1E0C2F', padding: '40px 16px 16px 16px', gap: 8, width: '34%', marginTop: "24px" }}>
                    <Image src='../assets/svgs/invest.svg' style={{ width: 30, }} />
                    <Flex style={{ flexDirection: 'row', gap: 3 }}>
                        <Text fontWeight={600} fontSize='md' lineHeight="20px">{investment.name}</Text>
                        {investment.is_invested && <Image src='../assets/svgs/medal.svg' style={{ width: 20, }} />}
                    </Flex>
                    <Button onClick={() => {
                        setInvestmentId(investment.id)
                        setSheetSnap(0)
                    }} variant="clear" fontWeight={600} fontSize='md' lineHeight="20px" style={{ color: 'white', padding: 0, width: 'auto', height: 'auto', justifyContent: 'flex-start', textDecoration: 'underline' }}>Invest</Button>
                </Flex>)}
            </Flex>}
            {screen === "p2p" && <Text fontWeight={600} fontSize='xl' lineHeight="20px" textAlign='center' marginTop='24px'>Coming soon!!!</Text>}

            <Sheet isOpen={true}
                onClose={() => setSheetSnap(1)}
                snapPoints={[400, 0]}
                initialSnap={sheetSnap}
            >
                <Sheet.Container style={{ backgroundColor: '#0F021D' }}>
                    <Sheet.Header />
                    <Sheet.Content style={{ textAlign: 'center' }}>
                        <Text>Amount to invest</Text>
                        <Flex style={{ flexWrap: 'wrap', justifyContent: 'space-between', gap: 8, marginTop: 24 }}>
                            {
                                [3000, 4000, 5000, 10000, 20000].map((task) => (
                                    <Button
                                        style={{ width: "48%", backgroundColor: selectedTasks === task ? 'green' : '' }}
                                        key={task}
                                        onClick={() => setSelectedTasks(task)}
                                    >
                                        {task}
                                    </Button>
                                ))
                            }
                        </Flex>
                        {screen === "investment" && <Button onClick={() => proceedInvestment(investmentId, selectedTasks as number)} style={{ marginTop: "24px" }}>Process with investment</Button>}
                        {screen === "charity" && <Button onClick={() => donateClick(charityId, selectedTasks as number)} style={{ marginTop: "24px" }}>Charity</Button>}
                    </Sheet.Content>
                </Sheet.Container>
                <Sheet.Backdrop />
            </Sheet>
        </>
    )
}
