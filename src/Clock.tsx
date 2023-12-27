import useClock from "./useClock";

export default function Clock () {
    const [time, ampm] = useClock()

    return (
        <>
            <div>
                <span>{time}  {ampm}</span> 
            </div>
        </>
    )
}