import ReactDOM from "react-dom";
import "./SavePrompt.css";
import BasicTextbox from "../components/BasicTextbox";
import { useState } from "react";
import Button from "../components/Button";
import { ApiPostRequest, SendRecord } from "../NetworkAPI/NetworkCommands";

interface SavePromptProp {
  receiveUserName: (userName: string) => void;
  setSavePromptVisibility: () => void;
}

function SavePrompt({
  receiveUserName,
  setSavePromptVisibility,
}: SavePromptProp) {
  const [userInput, setUserInput] = useState("");

  const handleOverlayClick = () => {
    setSavePromptVisibility();
  };

  const handleUserInput = (userInput: string) => {
    setUserInput(userInput);
  };

  const handleSaveButtonClick = () => {
    const request: ApiPostRequest = {
      userName: "asd",
      wpm: 100,
    };
    SendRecord(request);
    setSavePromptVisibility();
  };

  const handleDialogClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  return ReactDOM.createPortal(
    <div className="overlay" onClick={handleOverlayClick}>
      <div className="savePromptOverlay" onClick={handleDialogClick}>
        <h1>Enter Name: </h1>
        <BasicTextbox receiveUserInput={handleUserInput} />
        <Button buttonContext="Save" handleOnClick={handleSaveButtonClick} />
      </div>
    </div>,
    document.body
  );
}

export default SavePrompt;
