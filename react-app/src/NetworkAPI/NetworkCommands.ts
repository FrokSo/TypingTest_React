import axios from "axios";

export interface ApiResponse {
  recordId: number;
  wpm: number;
  userName: string;
  inputDate: string;
}

export interface ApiPostRequest {
  userName: string;
  wpm: number;
}

export const RetrieveRecords = async (): Promise<ApiResponse[]> => {
  try {
    console.log("Retrieving WPM Data");
    const response = await axios.get("http://localhost:5000/api/WPMRecords");
    const data = response.data;
    console.log(data);
    if (response.status === 200) {
      //alert('Record submitted successfully');
    }
    return data;
  } catch (error) {
    console.error("There was an error submitting the record!", error);
    return [];
  }
};

export const SendRecord = async (request: ApiPostRequest): Promise<boolean> => {
  console.log("Entered SendRecord");
  console.log(`request: ${request}`);
  try {
    const response = await axios.post(
      "http://localhost:5000/api/WPMRecords",
      request
    );
    console.log("Entered");
    if (response.status === 200) {
      alert("Record submitted successfully");
    }
    return true;
  } catch (error) {
    console.error("There was an error submitting the record!", error);
    return false;
  }
};
