import React, { useState, useEffect } from "react";

interface TextBoxProp {
    wordDump: string[];
    isTextboxDisabled: boolean;
    startTimer: () => void
}


function TextBox({ wordDump, isTextboxDisabled, startTimer }: TextBoxProp) {
    const [value, setValue] = useState('');
    // on page load
    useEffect(() => {
        checkUserInput();
    });

    let [userInput, setUserInput] = useState<JSX.Element[]>([]);
    let wordDumpArrayLength = wordDump.length;

    const checkUserInput = (): JSX.Element[] => {
        let input: JSX.Element[] = [];
        const wordsUserTyped: string = value;
        const userTypedArray: string[] = wordsUserTyped.split(' ');
        const numberWordsTyped: number = userTypedArray.length;
        for (let i = 0; i < numberWordsTyped; ++i) {
            // correct spelling
            if (userTypedArray[i] === wordDump[i]) {
                input.push(
                    <span key={i} style={{ color: "green" }}>
                        {wordDump[i]} &nbsp;
                    </span>
                )
            }
            // wrong spelling
            else {
                input.push(
                    <span key={i} style={{ color: "red" }}>
                        {wordDump[i]} &nbsp;
                    </span>
                )
            }
        }
        for (let i = numberWordsTyped; i < wordDumpArrayLength; ++i) {
            // user have not reached this part of the words
            input.push(
                <span key={i} style={{ color: "black" }}>
                    {wordDump[i]} &nbsp;

                </span>)

        }
        setUserInput(input);
        return input;
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
        checkUserInput();
        console.log(value);
    }

    const handleKeyDown = (event: React.KeyboardEvent) => {
        startTimer();
    }

    return (
        <>
            <div>
                {userInput}
            </div>
            <input onChange={handleChange}
                onKeyDown={handleKeyDown}
                value={value}
                type="text"
                spellCheck={false}
                disabled={isTextboxDisabled}
            />
        </>
    )
}

export default TextBox;