import { useEffect, useState } from 'react';
import { 
        Heading,
        Text,
        Button,
        Container,
        Center,
        Mark } from '@chakra-ui/react';

export const App = () => {

    const storageKeyName = "count";

    const retrieveCountValue = () => Number(localStorage.getItem(storageKeyName) || 0);

    const [count, setCount] = useState(retrieveCountValue());

    const addNumber = (count) => setCount(Number(count) + 1);
    
    useEffect(() =>  {
        localStorage.setItem(storageKeyName, String(count));
    }, [count])

return (
    // react fragment
    <>
        <Container maxW = {['full', 'container.lg']} mt={6}>
            <Center>
                <Heading fontSize='30px' fontFamily='NewYork'>Welcome! </Heading>
            </Center>
            <Center>
                <Text fontSize='15px' fontFamily='NewYork' mb={5}>This is my first react app </Text>
            </Center>
            <Center>
                <Mark bg='lightgrey' color='black' m={4} px={2} py={1} borderRadius={3}>Count is already {count}!</Mark>
            </Center>
            <Center>    
                <Button 
                height='48px'
                width='200px'
                border='2px'
                variant='solid' 
                fontStyle='italic'
                fontSize='15px'
                onClick={() => addNumber(count)}>Count me!</Button>
            </Center>
        </Container>
    </>
    )
}

export default App
