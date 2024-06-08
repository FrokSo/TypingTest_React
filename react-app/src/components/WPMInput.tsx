import React, { useState, useEffect } from "react";

interface TextBoxProp {
    wordDump: string[];
    disableTextBox: boolean;
    startTimer: () => void;
    retrieveNumCorrectWords: (num: number) => void;
}

function TextBox({ wordDump, disableTextBox, startTimer, retrieveNumCorrectWords }: TextBoxProp) {
    const [value, setValue] = useState('');
    const [userInput, setUserInput] = useState<JSX.Element[]>([]);
    const [isTimerStarted, setIsTimerStarted] = useState(false);
    const [isTextboxDisabled, setIsTextboxDisabled] = useState(disableTextBox);

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
                for (let charChecker = 0; charChecker <= currentCharIndex; ++charChecker) {
                    input.push(
                        <span key={`${i}-${charChecker}`}
                            style={{
                                color: getCharColor(wordDump[i][charChecker], userTypedArray[i] ?
                                    userTypedArray[i][charChecker] :
                                    '')
                            }}>
                            {wordDump[i][charChecker]}
                        </span>
                    );
                }

                for (let charIndex = currentCharIndex + 1; charIndex < wordDump[i].length; ++charIndex) {
                    console.log(`${i}-${charIndex}`);
                    input.push(
                        <span key={`${i}-${charIndex}`} style={{ color: "black" }}>
                            {wordDump[i][charIndex]}
                        </span>
                    );
                    currentCharIndex++;
                }
                input.push(<span className="spanSpace" key={`space-${i}`}></span>);
                if (wordDump[i] === userTypedArray[i]) {
                    correctCount++;
                }
            }

            for (let i = numberWordsTyped; i < wordDump.length; ++i) {
                input.push(
                    <span className="spanSpace" key={i} style={{ color: "black" }}>
                        {wordDump[i]}
                    </span>
                );
            }
            retrieveNumCorrectWords(correctCount);
            setUserInput(input);
        };
    }

    const getCharColor = (userInputChar: string, wordDumpChar: string): string => {

        if (userInputChar === wordDumpChar) {
            return "green";
        } else {
            return "red"
        }
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };

    const handleKeyDown = (event: React.KeyboardEvent) => {
        if (!isTimerStarted) {
            startTimer();
            setIsTimerStarted(true); // only calls this once
            console.log("Timer has started");
        }
    };

    return (
        <>
            <div className="container">
                <div className="referenceText">{userInput}</div>
                <input
                    className="user-input"
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                    value={value}
                    type="text"
                    spellCheck={false}
                    disabled={isTextboxDisabled}
                />
            </div>
        </>
    );
}

export default TextBox;
