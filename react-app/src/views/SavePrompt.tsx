import ReactDOM from "react-dom";
import "./SavePrompt.css";
import BasicTextbox from "../components/BasicTextbox";
import { useState } from "react";
import Button from "../components/Button";
import { ApiPostRequest, SendRecord } from "../networkAPI/NetworkCommands";

interface SavePromptProp {
  setSavePromptVisibilityFalse: () => void;
  wpm: number;
}

function SavePrompt({ setSavePromptVisibilityFalse, wpm }: SavePromptProp) {
  const [userName, setuserName] = useState("");

  const handleOverlayClick = () => {
    setSavePromptVisibilityFalse();
  };

  const handleSaveButtonClick = () => {
    const request: ApiPostRequest = {
      userName: userName,
      wpm: wpm,
    };
    SendRecord(request);
    setSavePromptVisibilityFalse();
  };

  const handleDialogClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  return ReactDOM.createPortal(
    <div className="overlay" onClick={handleOverlayClick}>
      <div className="savePromptOverlay" onClick={handleDialogClick}>
        <h1>Enter Name: </h1>
        <BasicTextbox receiveUserInput={(value) => setuserName(value)} />
        <Button buttonContext="Save" handleOnClick={handleSaveButtonClick} />
      </div>
    </div>,
    document.body
  );
}

export default SavePrompt;
