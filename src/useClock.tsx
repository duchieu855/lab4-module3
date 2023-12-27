import { useState, useEffect } from "react";

 
export default function useClock () {
    const [time, setTime] = useState("")
    const [ampm, setAmPm] = useState("")

    function updateTime () {
        const dateInfo = new Date()
        let hour
        if(dateInfo.getHours() === 0) {
            hour = "12"
        } else if(dateInfo.getHours() < 12) {
            if (dateInfo.getHours() < 10) {
                hour = "0" + dateInfo.getHours()
            } else {
                hour = "" + dateInfo.getHours()
            }
            
        } else {
            if ((dateInfo.getHours() - 12) < 10) {
                hour = "0" + (dateInfo.getHours() - 12)
            } else {
                hour = "" + (dateInfo.getHours() - 12)
            }
            

        }
        let minutes = dateInfo.getMinutes() < 10 ? ("0" + dateInfo.getMinutes) : dateInfo.getMinutes()
        let seconds = dateInfo.getSeconds() < 10 ? ("0" + dateInfo.getSeconds) : dateInfo.getSeconds()

        let isAmPm = dateInfo.getHours() < 12 ? "AM" : "PM"

        setTime(`${hour}:${minutes}:${seconds}`)
        setAmPm(isAmPm)
    }
    const setIntervalID = setInterval(updateTime,1000)
    useEffect(()=> {
        
        return clearInterval(setIntervalID)
    },[time,ampm])

    return [time,ampm]

}