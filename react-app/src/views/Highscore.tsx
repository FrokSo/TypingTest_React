import React, { useEffect, useState } from "react";
import { ApiPostRequest, ApiResponse, RetrieveRecords, SendRecord } from "../networkAPI/NetworkCommands";

import Table from "../components/Table";
import Button from "../components/Button";
import "./Highscore.css";
import SavePrompt from "./SavePrompt";
import { useLocation } from "react-router-dom";
import { RetrieveTop10 } from "../helper/HelperFunc";

function Highscore() {
    const [records, setRecords] = useState<ApiResponse[]>([]);
    const [savePromptVisibility, setSavePromptVisibility] = useState(false);
    const [wpm, setWpm] = useState(0);

    const location = useLocation();

    useEffect(() => {
        console.log("Effect triggered. savePromptVisibility:", savePromptVisibility, "wpm:", wpm);
        fetchRecords();
        console.log(wpm);
    }, [savePromptVisibility, wpm]);

    useEffect(() => {
        // null checks
        if (location.state !== null) {
            const { Wpm } = location.state as { Wpm: number };
            setWpm(Wpm);
        }
    }, [])

    const fetchRecords = async () => {
        try {
            const data = await RetrieveRecords();
            setRecords(RetrieveTop10(data));
            // setRecords(data);
            console.log("Records:", data);
        } catch (error) {
            console.error("Error fetching records:", error);
        }
    };

    const setSavePromptVisibilityTrue = () => {
        setSavePromptVisibility(true);
    };

    const handleSetSavePromptVisibilityFalse = () => {
        setSavePromptVisibility(false);
    };

    return (
        <div>
            {wpm !== 0 ?
                <div className="highscoreWpmDiv">
                    <p>Current WPM: {wpm}</p>
                    <Button buttonContext="Save" handleOnClick={setSavePromptVisibilityTrue} />
                    {savePromptVisibility && (
                        <SavePrompt wpm={wpm} setSavePromptVisibilityFalse={handleSetSavePromptVisibilityFalse}
                        />
                    )}
                </div> : <div />}

            <h1 className="highscoreHeader">Records Table</h1>
            <Table records={records}></Table>
        </div>
    );
}

export default Highscore;
