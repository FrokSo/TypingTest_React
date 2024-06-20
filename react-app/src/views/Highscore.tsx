import React, { useEffect, useState } from "react";
import {
  ApiPostRequest,
  ApiResponse,
  RetrieveRecords,
  SendRecord,
} from "../NetworkAPI/NetworkCommands";

import Table from "../components/Table";
import Button from "../components/Button";
import "./Highscore.css";
import SavePrompt from "./SavePrompt";

function Highscore() {
  const [records, setRecords] = useState<ApiResponse[]>([]);
  const [savePromptVisibility, setSavePromptVisibility] = useState(false);

  useEffect(() => {
    const fetchRecords = async () => {
      try {
        const data = await RetrieveRecords();
        setRecords(data);
        console.log("Records:", data); // Log fetched data, not state
      } catch (error) {
        console.error("Error fetching records:", error);
      }
    };
    fetchRecords();
  }, []);

  const handleOnClick = () => {
    setSavePromptVisibility(true);
  };

  const handleSetSavePromptVisibility = () => {
    setSavePromptVisibility(false);
  };

  const handleReceiveUserName = () => {};

  return (
    <div>
      <div className="highscoreWpmDiv">
        <p>Current WPM: {}</p>
        <Button buttonContext="Save" handleOnClick={handleOnClick} />
        {savePromptVisibility && (
          <SavePrompt
            receiveUserName={handleReceiveUserName}
            setSavePromptVisibility={handleSetSavePromptVisibility}
          />
        )}
      </div>
      <h1 className="highscoreHeader">Records Table</h1>
      <Table records={records}></Table>
    </div>
  );
}

export default Highscore;
