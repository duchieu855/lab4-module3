import { useState, useEffect} from "react"



function Timer () {
    const [count, setCount] = useState <number>(10)
    useEffect(() => {
        const setIntervalID = setInterval(() => setCount(preCount => preCount -1),10000000)
        if (count < 0) {
            clearInterval(setIntervalID)
            alert("Time's up")
            setCount(10);
        }
        return () => clearInterval(setIntervalID)
    },[count])
    return (
        <>
            <p>Count down from {count}</p>
        </>
    )
}

export default Timer