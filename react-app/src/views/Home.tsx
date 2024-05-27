import { useState, useEffect } from "react";
import TextBox from "../components/Input";
import Timer from "../components/Timer";

interface HomeProp {
    wordDump: string[];
    initialSeconds: number;
}

function Home({ wordDump, initialSeconds }: HomeProp) {
    const [shouldStart, setshouldStart] = useState(false);
    const [isTextboxDisabled, setIsTextboxDisabled] = useState(false);

    const [wpm, setWpm] = useState(0);
    const [timeRemaining, setTimeRemaining] = useState(0);
    const [numCorrectWords, setNumCorrectWords] = useState(0);


    useEffect(() => {
        let tempWpm = numCorrectWords / (initialSeconds - timeRemaining) * initialSeconds;
        setWpm(tempWpm);
    }, [numCorrectWords, timeRemaining])
    const handleOnTimerFinish = () => {
        setIsTextboxDisabled(true);
        setshouldStart(false);
    }

    const handleStartTimer = () => {
        setshouldStart(true);
        console.log(`Entered handledStartTimer. shouldStart: ${shouldStart}`)
    }

    const handleRetrieveTime = (time: number): void => {
        setTimeRemaining(time);
    }

    const handleRetrieveNumCorrectWords = (num: number) => {
        setNumCorrectWords(num);
    }

    return (
        <>
            <p>words per minute: {wpm}</p>
            <Timer initialSeconds={initialSeconds}
                shouldStart={shouldStart}
                onTimerFinish={handleOnTimerFinish}
                retrieveTime={handleRetrieveTime} />
            <TextBox wordDump={wordDump}
                isTextboxDisabled={isTextboxDisabled}
                startTimer={handleStartTimer}
                retrieveNumCorrectWords={handleRetrieveNumCorrectWords}
            />
        </>
    )
}

export default Home;