import React, { useState, useEffect } from "react";

interface TextBoxProp {
    wordDump: string[];
    isTextboxDisabled: boolean;
    startTimer: () => void;
    retrieveNumCorrectWords: (num: number) => void;
}

function TextBox({ wordDump, isTextboxDisabled, startTimer, retrieveNumCorrectWords }: TextBoxProp) {
    const [value, setValue] = useState('');
    const [userInput, setUserInput] = useState<JSX.Element[]>([]);
    const [isTimerStarted, setIsTimerStarted] = useState(false);

    useEffect(() => {
        checkUserInput();
    }, [value]);

    const checkUserInput = (): JSX.Element[] => {
        const input: JSX.Element[] = [];
        const wordsUserTyped: string = value;
        const userTypedArray: string[] = wordsUserTyped.split(' ');
        const numberWordsTyped: number = userTypedArray.length;

        let correctCount = 0;
        for (let i = 0; i < numberWordsTyped; ++i) {
            for (let charIndex = 0; charIndex < wordDump[i].length; ++charIndex) {
                if (wordDump[i][charIndex] === (userTypedArray[i] ? userTypedArray[i][charIndex] : '')) {
                    input.push(
                        <span key={`${i}-${charIndex}`} style={{ color: "green" }}>
                            {wordDump[i][charIndex]}
                        </span>
                    );
                } else if (userTypedArray[i] && wordDump[i][charIndex] !== userTypedArray[i][charIndex]) {
                    input.push(
                        <span key={`${i}-${charIndex}`} style={{ color: "red" }}>
                            {wordDump[i][charIndex]}
                        </span>
                    );
                } else {
                    input.push(
                        <span key={`${i}-${charIndex}`} style={{ color: "black" }}>
                            {wordDump[i][charIndex]}
                        </span>
                    );
                }
            }
            input.push(<span key={`space-${i}`}>&nbsp;</span>);
            if (wordDump[i] == userTypedArray[i]) {
                correctCount++;
            }
        }
        retrieveNumCorrectWords(correctCount);

        for (let i = numberWordsTyped; i < wordDump.length; ++i) {
            input.push(
                <span key={i} style={{ color: "black" }}>
                    {wordDump[i]} &nbsp;
                </span>
            );
        }

        setUserInput(input);
        return input;
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };

    const handleKeyDown = (event: React.KeyboardEvent) => {
        if (!isTimerStarted) {
            startTimer();
            setIsTimerStarted(true); // only calls this once
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
