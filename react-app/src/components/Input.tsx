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
    const [numCorrectInputs, setNumCorreectInputs] = useState(0);

    useEffect(() => {
        checkUserInput();
    }, [value]);

    const checkUserInput = (): JSX.Element[] => {
        const input: JSX.Element[] = [];
        const wordsUserTyped: string = value;
        const userTypedArray: string[] = wordsUserTyped.split(' ');
        const numberWordsTyped: number = userTypedArray.length;

        setNumCorreectInputs(0);
        for (let i = 0; i < numberWordsTyped; ++i) {
            if (userTypedArray[i] === wordDump[i]) {
                input.push(
                    <span key={i} style={{ color: "green" }}>
                        {wordDump[i]} &nbsp;
                    </span>
                );
                setNumCorreectInputs(prev => prev + 1);
            } else {
                input.push(
                    <span key={i} style={{ color: "red" }}>
                        {wordDump[i]} &nbsp;
                    </span>
                );
            }
        }
        retrieveNumCorrectWords(numCorrectInputs);

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
            <div>{userInput}</div>
            <input
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                value={value}
                type="text"
                spellCheck={false}
                disabled={isTextboxDisabled}
            />
        </>
    );
}

export default TextBox;