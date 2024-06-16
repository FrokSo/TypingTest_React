import React, { useEffect, useState } from "react";
import { ApiResponse, RetrieveRecords } from "../NetworkAPI/NetworkCommands";

function Highscore() {
    const [records, setRecords] = useState<ApiResponse[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchRecords = async () => {
            try {
                const data = await RetrieveRecords();
                setRecords(data);
                setLoading(false);
                console.log("Records:", data); // Log fetched data, not state
            } catch (error) {
                console.error("Error fetching records:", error);
                setLoading(false);
            }
        };

        fetchRecords();
    }, []);

    return (
        <div>
            <h2>Records Table</h2>
            {loading ? (
                <h1>Loading records...</h1>
            ) : (
                records.map((record, index) => (
                    <div key={index}>
                        <h3>Record #{record.recordId}</h3>
                        <p>User Name: {record.userName}</p>
                        <p>Words Per Minute (WPM): {record.wpm}</p>
                        <p>Input Date: {record.inputDate}</p>
                    </div>
                ))
            )}
        </div>
    );
}

export default Highscore;
