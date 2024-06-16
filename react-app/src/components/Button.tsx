import axios from 'axios';

interface ButtonProp {
    buttonContext: string;
    handleOnClick: () => void;
}

function Button({ buttonContext, handleOnClick }: ButtonProp) {

    // function to be exported out
    const handleSubmit = async () => {
        const record = {
            "RecordId": 2,
            "WPM": 0,
            "UserName": "string",
            "inputDate": "2024-06-11T16:08:03.085Z"
        }

        try {
            const response = await axios.get('http://localhost:5000/api/WPMRecords');
            console.log("Entered");
            if (response.status === 200) {
                alert('Record submitted successfully');
            }
        } catch (error) {
            console.error('There was an error submitting the record!', error);
        }
    };

    return (<button
        onClick={handleSubmit}>{buttonContext}</button>);
}

export default Button;