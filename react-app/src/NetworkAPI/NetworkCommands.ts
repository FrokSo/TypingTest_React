import axios from 'axios';

export interface ApiResponse{
    recordId : number;
    wpm : number;
    userName : string;
    inputDate : string;
}

export const RetrieveRecords = async () : Promise<ApiResponse[]> => {
    try {
        console.log("Retrieving WPM Data");
        const response = (await axios.get('http://localhost:5000/api/WPMRecords'));
        const data = response.data;
        console.log(data);
        if (response.status === 200) {
            //alert('Record submitted successfully');
        }
        return data;
    } catch (error) {
        console.error('There was an error submitting the record!', error);
        return [];
    }

}