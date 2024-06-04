import { useState, useEffect } from "react";
import TextBox from "../components/Input";
import Timer from "../components/Timer";

interface HomeProp {
    wordDump: string[];
    initialSeconds: number;
}

function Home({ wordDump, initialSeconds }: HomeProp) {
    const [shouldStart, setshouldStart] = useState(false);
    const [isTextboxDiabled, setIsTextBoxDisable] = useState(false);

    const [wpm, setWpm] = useState(0);
    const [timeRemaining, setTimeRemaining] = useState(0);
    const [numCorrectWords, setNumCorrectWords] = useState(0);


    useEffect(() => {
        let tempWpm = numCorrectWords / (initialSeconds - timeRemaining) * 60;
        setWpm(tempWpm);
    }, [numCorrectWords, timeRemaining])
    
    const handleOnTimerFinish = () => {
        setIsTextBoxDisable(true);
        setshouldStart(false);
    }

    const handleStartTimer = () => {
        setshouldStart(true);
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
            <Timer 
                initialSeconds={initialSeconds}
                shouldStart={shouldStart}
                onTimerFinish={handleOnTimerFinish}
                retrieveTime={handleRetrieveTime} />
            <TextBox wordDump={wordDump}
                disableTextBox = {isTextboxDiabled}
                startTimer={handleStartTimer}
                retrieveNumCorrectWords={handleRetrieveNumCorrectWords}
            />
        </>
    )
}

export default Home;