import { useEffect, useState } from 'react'
import './App.css'

function App() {

    const storageKeyName = "count";

    const retrieveCountValue = () => Number(localStorage.getItem(storageKeyName) || 0);

    const [count, setCount] = useState(retrieveCountValue());

    const addNumber = (count) => setCount(Number(count) + 1);
    
    useEffect(() =>  {
        localStorage.setItem(storageKeyName, String(count));
    }, [count])

return (
    <div className="App">
        Hello World!
        <button onClick={() => addNumber(count)}>
            count is {count}
        </button>
    </div>
    )
}

export default App
