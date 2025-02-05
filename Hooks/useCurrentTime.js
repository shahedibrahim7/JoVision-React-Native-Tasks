import { useState, useEffect } from 'react'

const useCurrentTime = () => {
    const [time, setTime] = useState(new Date())

    useEffect(() => {
        const timeInterval = setInterval(() => {setTime(new Date())}, 1000)
        return () => clearInterval(timeInterval)
    }, [])

    return time
}

export default useCurrentTime