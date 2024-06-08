import { useState } from "react";

interface BasicTextboxProp {
    receiveUserInput: (textboxInput: string) => void
}

function BasicTextbox({ receiveUserInput }: BasicTextboxProp) {

    const [userInput, setUserInput] = useState("");

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserInput(event.target.value);
        receiveUserInput(userInput);
    }

    return (<input type="text"
        onChange={handleOnChange}>
    </input>)
}

export default BasicTextbox;