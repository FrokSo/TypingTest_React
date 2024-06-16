import { useState, useEffect } from "react";
import WPMInput from "../components/WPMInput";
import Timer from "../components/Timer";
import BasicTextbox from "../components/BasicTextbox";
import Button from "../components/Button"

import "./Home.css";

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
        <div >
            <div className="infoDiv">
                <p>words per minute: {wpm}</p>
                <Timer
                    initialSeconds={initialSeconds}
                    shouldStart={shouldStart}
                    onTimerFinish={handleOnTimerFinish}
                    retrieveTime={handleRetrieveTime} />
            </div>
            <WPMInput wordDump={wordDump}
                disableTextBox={isTextboxDiabled}
                startTimer={handleStartTimer}
                retrieveNumCorrectWords={handleRetrieveNumCorrectWords}
            />


            {/* <div className="flex">
                <p>Enter Name: </p>
                <BasicTextbox receiveUserInput={handleReceiveUserInput} />
                <Button buttonContext="Enter" />
            </div> */}
        </div>
    )
}

export default Home;