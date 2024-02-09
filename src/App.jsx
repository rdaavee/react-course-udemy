import { useEffect, useState } from 'react'
import { MainApp } from './styled'

function App() {

    const storageKeyName = "count";

    const retrieveCountValue = () => Number(localStorage.getItem(storageKeyName) || 0);

    const [count, setCount] = useState(retrieveCountValue());

    const addNumber = (count) => setCount(Number(count) + 1);
    
    useEffect(() =>  {
        localStorage.setItem(storageKeyName, String(count));
    }, [count])

return (
    <MainApp>
        Click Me
        <button onClick={() => addNumber(count)}>
            count is {count}
        </button>
    </MainApp>
    )
}

export default App
