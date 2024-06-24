import { useEffect, useState } from "react";
import "./BasicTextbox.css";

interface BasicTextboxProp {
  receiveUserInput: (textboxInput: string) => void;
}

function BasicTextbox({ receiveUserInput }: BasicTextboxProp) {
  const [userInput, setUserInput] = useState("");

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(event.target.value);
  };

  useEffect(() => {
    console.log(userInput);
    setUserInput(userInput);
    receiveUserInput(userInput);
  }, [userInput]);

  return (
    <input className="textbox" type="text" onChange={handleOnChange}></input>
  );
}

export default BasicTextbox;
