import { useEffect, useState } from "react"

function Content() {
    const [countdown, setCountdown] = useState(180)

    useEffect(()=>{
        const timerID = setInterval(()=>{
            setCountdown(preState => preState -1)
        },1000)
        return ()=> clearInterval(timerID)
    },[])

    return (
        <div>
            <h1>{countdown}</h1>
        </div>
    )
}

export default Content