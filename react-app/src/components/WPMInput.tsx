import React, { useState, useEffect, useRef } from "react";
import "./WPMInput.css";

interface WPMInputProp {
    wordDump: string[];
    disableTextBox: boolean;
    startTimer: () => void;
    retrieveNumCorrectWords: (num: number) => void;
}

function WPMInput({ wordDump, disableTextBox, startTimer, retrieveNumCorrectWords }: WPMInputProp) {
    const [value, setValue] = useState('');
    const [userInput, setUserInput] = useState<JSX.Element[]>([]);
    const [isTimerStarted, setIsTimerStarted] = useState(false);
    const [isTextboxDisabled, setIsTextboxDisabled] = useState(disableTextBox);
    const mouseDownRef = useRef(false);

    useEffect(() => {
        checkUserInput();
    }, [value]);

    useEffect(() => {
        setIsTextboxDisabled(disableTextBox);
    }, [disableTextBox])

    const checkUserInput = () => {
        const wordsUserTyped: string = value;
        const userTypedArray: string[] = wordsUserTyped.split(' ');
        const numberWordsTyped: number = userTypedArray.length;

        let correctCount = 0;
        if (numberWordsTyped <= wordDump.length) {
            const input: JSX.Element[] = [];

            // Words Iteration
            for (let i = 0; i < numberWordsTyped; ++i) {
                var currentCharIndex = userTypedArray[i].length - 1;

                // Checks from index 0 to current word
                const wordSpan: JSX.Element[] = [];
                for (let charChecker = 0; charChecker <= currentCharIndex; ++charChecker) {
                    wordSpan.push(
                        <span key={`${i}-${charChecker}`}
                            className={getCharColor(wordDump[i][charChecker], userTypedArray[i][charChecker]) ?
                                "spanCorrect" : "spanError"}>
                            {wordDump[i][charChecker]}
                        </span>
                    );
                    console.log(`${wordDump[i][charChecker]}, ${userTypedArray[i]}`);
                }

                for (let charIndex = currentCharIndex + 1; charIndex < wordDump[i].length; ++charIndex) {
                    wordSpan.push(
                        <span key={`${i}-${charIndex}`}
                            className="spanDefault">
                            {wordDump[i][charIndex]}
                        </span>
                    );
                    currentCharIndex++;
                }
                input.push(
                    <span key={i} className="spanWord">
                        {wordSpan}
                    </span>
                );

                input.push(<span className="spanSpace" key={`space-${i}`}></span>);
                if (wordDump[i] === userTypedArray[i]) {
                    correctCount++;
                }
            }

            for (let i = numberWordsTyped; i < wordDump.length; ++i) {
                input.push(
                    <span className="spanUntyped" key={i}>
                        {wordDump[i]}
                    </span>
                );
            }
            retrieveNumCorrectWords(correctCount);
            setUserInput(input);
        };
    }

    const getCharColor = (userInputChar: string, wordDumpChar: string): boolean => {

        if (userInputChar === wordDumpChar) {
            return true;
        } else {
            return false;
        }
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };

    const handleKeyDown = (event: React.KeyboardEvent) => {
        if (event.ctrlKey && event.key === 'a') {
            event.preventDefault(); // Prevent the "select all" functionality
        }
        if (!isTimerStarted) {
            startTimer();
            setIsTimerStarted(true); // only calls this once
            console.log("Timer has started");
        }
    };

    return (
        <>
            <div className="container" style={{ whiteSpace: 'nowrap' }}>
                <div className="referenceText" style={{ whiteSpace: 'nowrap' }}>{userInput}</div>
                <input
                    className="user-input"
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                    value={value}
                    type="text"
                    spellCheck={false}
                    disabled={isTextboxDisabled}
                    autoFocus={true}
                />
            </div>
        </>
    );
}

export default WPMInput;
