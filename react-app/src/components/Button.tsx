import axios from 'axios';

interface ButtonProp {
    buttonContext: string;
}

function Button({ buttonContext }: ButtonProp) {

    const handleSubmit = async () => {
        const record = {
            WPM: 100,
            UserName: "asd",
        };

        try {
            const response = await axios.post('http://localhost:5000/WPMRecords', record);
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