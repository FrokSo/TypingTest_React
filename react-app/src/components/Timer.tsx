import { useEffect, useState } from "react";

interface TimerProp {
    initialSeconds: number;
    shouldStart: boolean;
    onTimerFinish: () => void;
    retrieveTime: (time: number) => void;
}

function Timer({ initialSeconds, shouldStart, onTimerFinish, retrieveTime }: TimerProp) {

    const [seconds, setSeconds] = useState(initialSeconds);
    const [isStarted, setIsStarted] = useState(false);

    useEffect(() => {
        if (shouldStart) {
            setIsStarted(true);
            console.log(`Entered useEffect. shouldStart: ${shouldStart}`)
            console.log(`Entered useEffect. isStarted: ${isStarted}`)
        }
    }, [shouldStart, isStarted])
    useEffect(() => {
        if (isStarted) {
            if (seconds > 0) {
                const interval = setInterval(() => {
                    setSeconds(prevSeconds => prevSeconds - 1);
                }, 1000);

                retrieveTime(seconds);
                return () => clearInterval(interval);
            }
            else {
                onTimerFinish();
            }
        }
    }, [seconds, onTimerFinish, isStarted])
    return (<p>Time Left: {seconds}</p>)
}

export default Timer;