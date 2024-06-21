import { ApiResponse } from "../networkAPI/NetworkCommands";
import "./Table.css";

interface tableProp {
  records: ApiResponse[];
  cssProp?: string;
}

function Table({ records, cssProp = "tableBasicStyle" }: tableProp) {

  const formatDateTime = (datetimeString: string): JSX.Element => {
    const date = new Date(datetimeString);

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');

    return (
      <>
        {year}-{month}-{day} <span className="tab-space"></span> {hours}:{minutes}
      </>
    );
  };

  return (
    <>
      <table className={cssProp}>
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
              <td>{record.userName}</td>
              <td>(WPM): {record.wpm}</td>
              <td>{formatDateTime(record.inputDate)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Table;
