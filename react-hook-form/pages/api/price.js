import axios from 'axios';

//fetching the current data using https://messari.io api from technical with Hugh 
//using axios opposed to fetch 
export const fetchPrice = async () => {
    let response = await axios.get("https://data.messari.io/api/v2/assets")
    return response.data;
}
