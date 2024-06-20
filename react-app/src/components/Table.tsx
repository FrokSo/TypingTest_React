import { ApiResponse } from "../networkAPI/NetworkCommands";
import "./Table.css";

interface tableProp {
  records: ApiResponse[];
}

function Table({ records }: tableProp) {

  return (
    <>
      <table className="tableBasicStyle">
        <thead>
          <tr>
            <th>Username</th>
            <th>WPM</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {records.map((record, index) => (
            <tr key={record.recordId}>
              <td>User Name: {record.userName}</td>
              <td>Words Per Minute (WPM): {record.wpm}</td>
              <td>Input Date: {record.inputDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Table;
